import React, { Component } from 'react';
import calculateItems from '../functions/calculateItems';
import getActions from '../functions/getActions';
import getCrafting from '../functions/getCrafting';
import { TimelineMax, TweenMax, Power0 } from 'gsap';
import '../styles/game.css';
import Items from '../gamedata/Items';


const actionTimeline = new TimelineMax();
class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actionSelected: 'Staring at some clouds.',
      performAction: false,
      age: 'discovery',
      bagUnlocked: false,
      craftUnlocked: false,
      selectToolUnlocked: false,
      travelUnlocked:false,
      tradeUnlocked: false,
      wisdomUnlocked: false,
      actionsAvailable: [],
      craftingAvailable: [],
      inventory: {
        grass_fiber: 9
      },
      mainTab: 'inventory',
      log: ["Welcome to Idleife!"],
    }
  }

  componentWillMount = () => {
    this.setState({
      actionsAvailable: getActions(),
      craftingAvailable: getCrafting(),
    })
  }

  // playSound = () => {
  //   clickAudio.volume = .6;
  //   clickAudio.play();
  // }

  performActions = (element, craft) => {
    if (!this.state.performingAction) {
      this.setState({
        actionSelected: element.action.concat('...'),
        performingAction: true,
      })
      actionTimeline.to('.game-progress-bar', element.time/1000, {width: '100%', ease: Power0.easeOut})
      .call(()=>{
        const requirements = element.requirements
        const nextInventory = this.state.inventory // creating a duplicate of the current inventory in order to be able to do maths on it.
        if (requirements) {
          for (let itemKey in requirements.items) {
            nextInventory[itemKey] -= requirements.items[itemKey]; // subtracts items from copied inventory.
          }
        }
        for (let key in element.reward) { // mapping through the reward
          if (key === 'items') { // the item part of the reward
            const item = element.reward[key].map((rewardEl)=>{
              return calculateItems(rewardEl.amount.min, rewardEl.amount.max, rewardEl.chance, rewardEl.item);
            }) // this is the variable that stores the item array returned by calculating the item rewards.
            let log; 
            if (craft) {
              log = "Crafted";
            } else {
              log = element.success;
            }
            let logStatus = false; // if items are received, changes to true. 
            item.forEach((itemEl)=>{
              console.log(itemEl);
              if (nextInventory[itemEl.item.name]) {
                nextInventory[itemEl.item.name] += itemEl.amount; // adds item to copied inventory
              } else {
                nextInventory[itemEl.item.name] = itemEl.amount;
              }
              if (itemEl.amount > 1) {
                log = log.concat(' ' + itemEl.amount.toString() + ' ' + itemEl.item.plural + ','); // this is the actual logged message.
                logStatus = true; // if there is an item, change status to true.
              } else if (itemEl.amount === 1) {
                log = log.concat(' ' + itemEl.amount + ' ' + itemEl.item.name.split('_').join(' ') + ','); // this is the actual logged message, but singular.
                logStatus = true; // if there is an item, change status to true.
              }
            })
            if (logStatus) {
              log = log.slice(0, -1).concat('.'); // adds a period at the end of the log if there was any items. 
            } else {
              log = element.failure // if there were no items given, make log output "received nothing!"
            }
            TweenMax.to('.game-progress-bar', 0, {width: 0});
            this.setState({
              inventory: nextInventory,
              log: [
                ...this.state.log,
                log
              ],
              actionSelected: 'Staring at some clouds.',
              performingAction: false,
            }, ()=>this.logRef.scrollIntoView()) // scrolls to bottom of log
          }
        }
      })
    }
  }
  renderInventory = () => {
    let invArr = [];
    for (let key in this.state.inventory) {
      if (this.state.inventory[key] > 0) {
        invArr.push(<li className={`game-inv-item-el item-rarity-${Items[key].rarity}`}>{key.split('_').join(' ')}: <span>{this.state.inventory[key]}</span></li>)
      }
    }
    return invArr;
  }
  performCrafting = (element) => {
    this.performActions(element, 'craft')
  }
  
  renderTab = (type) => {
    const func = `perform${type[0].toUpperCase() + type.slice(1, type.length)}`; /* perform action */
    return this.state[`${type}Available`].map((element, index)=>{
      let render = true;
      if (!element.requirements) {
        return (
          <li key={`${type}-${index}-li`} onClick={()=>this[func](element)}>{element.title}</li>
        )
      } else if ((element.requirements.age && element.requirements.age === this.age) || !element.requirements.age) {
        for (let item in element.requirements.items) {
          if (!this.state.inventory[item] || this.state.inventory[item] < element.requirements.items[item]) {
            render = false;
          }
        }
        if (render) {
          return (
            <li key={`${type}-${index}-li`} onClick={()=>this[func](element)}>{element.title}</li>
          )
        }
      }
    })
  }

  render() {
    const { state } = this;
    const mainTab = state.mainTab === 'inventory'? (
      <main>
        <h1>Inventory</h1>
        <ul>
          {this.renderInventory()}
        </ul>
      </main>
    ) : (
      <main className="game-crafting-tab">
        <h1>Crafting</h1>
        <ul>
          {this.renderTab('crafting')}
        </ul>
      </main>
    )
    return (
      <article className="Game">
        <section className="game-left-section">
          <header>Idleife v0.1.0-alpha</header>
          <h1>Actions</h1>
          <ul>
            {this.renderTab('actions')}
          </ul>
        </section>
        <section className="game-right-section">
          <header className="game-right-section-header">
            <h1>{state.actionSelected}</h1>
            <div className="game-progress-bar-cont">
              <div className="game-progress-bar"/>
            </div>
          </header>
          {mainTab}
          <aside>
            {state.log.map((logEl, index)=>{
              return (
                <p key={`log-el-${index}`} className="log-element">{logEl}</p>
              )
            })}
            <div ref={(e)=>{this.logRef = e}}/>
          </aside>
          <aside>
            <div className="game-unlockable-button-container">
              <button onClick={()=>{this.setState({mainTab: 'crafting'})}} className={`game-default-button`}>Crafting</button>
              <button className={`game-default-button ${state.travelUnlocked? '' : 'game-locked-button'}`}>{state.travelUnlocked? 'Travel' : 'Locked'}</button>
              <button className={`game-default-button ${state.tradeUnlocked? '' : 'game-locked-button'}`}>{state.travelUnlocked? 'Trade' : 'Locked'}</button>
              <button className={`game-default-button ${state.wisdomUnlocked? '' : 'game-locked-button'}`}>{state.travelUnlocked? 'Wisdom' : 'Locked'}</button>
            </div>
            <div className="game-settings-button-container">
              <button className={`game-default-button`}>Settings</button>
            </div>
          </aside>
          <footer>
            <div className="game-hotbar-button-container">
              <button onClick={()=>{this.setState({mainTab: 'inventory'})}} className="game-default-button">Inventory</button>
              <button className={`game-default-button ${state.selectToolUnlocked? '' : 'game-locked-button'}`}>{state.travelUnlocked? 'Select tool' : 'Locked'}</button>
              <button className={`game-default-button`}>Milestones</button>
              <button className={`game-default-button`}>Quest Book</button>
            </div>
            <div className={`game-bag-button-container ${state.travelUnlocked? '' : 'game-locked-button'}`}>
              {state.bagUnlocked? 'Bag' : 'Locked'}
            </div>
          </footer>
        </section>
      </article>
    )
  }
}
export default Game;