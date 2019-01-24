import React, { Component } from 'react';
import '../styles/game.css';
import ClickSound from '../assets/54407__korgms2000b__metronome-tap.wav';
import calculateItems from '../functions/calculateItems';
import getActions from '../functions/getActions';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actionSelected: 'none',
      age: 'discovery',
      bagUnlocked: false,
      craftUnlocked: false,
      selectToolUnlocked: false,
      travelUnlocked:false,
      tradeUnlocked: false,
      wisdomUnlocked: false,
      actionsAvailable: [],
      inventory: {
        dirt: 0,
        stick: 0,
        stone: 0,
        pebble: 0,
        grass_fiber: 0,
        sharp_stone: 0,
      },
      log: ["Welcome to Idleife!"],
    }
  }

  componentWillMount = () => {
    this.setState({
      actionsAvailable: getActions(),
    })
  }

  playSound = () => {
    const audio = new Audio(ClickSound);
    audio.volume = .6;
    audio.play()
  }

  performAction = (element) => {
    for (let key in element.reward) {
      if (key === 'items') {
        const item = element.reward[key].map((rewardEl)=>{
          return calculateItems(rewardEl.amount.min, rewardEl.amount.max, rewardEl.chance, rewardEl.item);
        })
        const nextInventory = this.state.inventory
        let log = 'received';
        let logStatus = false;
        item.forEach((itemEl)=>{
          nextInventory[itemEl.item.name] += itemEl.amount;
          console.log(itemEl.item)
          if (itemEl.amount > 1) {
            log = log.concat(' ' + itemEl.amount.toString() + ' ' + itemEl.item.plural + ',');
            logStatus = true;
          } else if (itemEl.amount === 1) {
            log = log.concat(' ' + itemEl.amount + ' ' + itemEl.item.name.split('_').join(' ') + ',');
            logStatus = true;
          }
        })
        if (logStatus) {
          log = log.slice(0, -1).concat('.');
        } else {
          log = log.concat(' nothing!');
        }
        this.setState({
          inventory: nextInventory,
          log: [
            ...this.state.log,
            log
          ]
        }, ()=>this.logRef.scrollIntoView())
      }
    }
  }

  render() {
    const { state } = this;
    return (
      <article className="Game">
        <section className="game-left-section">
          <header>Idleife v0.1.0-alpha</header>
          <h1>Actions</h1>
          <ul>
            {this.state.actionsAvailable.map((actionsEl)=>{
              if (!actionsEl.requirements) {
                return (
                  <li key={actionsEl.id} onClick={()=>{this.performAction(actionsEl)}}>{actionsEl.title}</li>  
                )
              } else if ((actionsEl.requirements.age && actionsEl.requirements.age === this.state.age) || !actionsEl.requirements.age) {
                for (let item in actionsEl.requirements.items) {
                  if (this.state.inventory[item] && this.state.inventory[item] >= actionsEl.requirements.items[item]) {
                    return (
                      <li key={actionsEl.id} onClick={()=>{this.performAction(actionsEl)}}>{actionsEl.title}</li>  
                    )
                  }
                }
              } 
              return null;
            })}
          </ul>
        </section>
        <section className="game-right-section">
          <header></header>
          <main></main>
          <aside>
            {state.log.map((logEl)=>{
              return (
                <p className="log-element">{logEl}</p>
              )
            })}
            <div ref={(e)=>{this.logRef = e}}/>
          </aside>
          <aside>
            <div className="game-unlockable-button-container">
              <button onMouseDown={this.playSound} className={`game-default-button`}>Craft</button>
              <button onMouseDown={this.playSound} className={`game-default-button ${state.travelUnlocked? '' : 'game-locked-button'}`}>{state.travelUnlocked? 'Travel' : 'Locked'}</button>
              <button onMouseDown={this.playSound} className={`game-default-button ${state.tradeUnlocked? '' : 'game-locked-button'}`}>{state.travelUnlocked? 'Trade' : 'Locked'}</button>
              <button onMouseDown={this.playSound} className={`game-default-button ${state.wisdomUnlocked? '' : 'game-locked-button'}`}>{state.travelUnlocked? 'Wisdom' : 'Locked'}</button>
            </div>
            <div className="game-settings-button-container">
              <button onMouseDown={this.playSound} className={`game-default-button`}>Settings</button>
            </div>
          </aside>
          <footer>
            <div className="game-hotbar-button-container">
              <button onMouseDown={this.playSound} className="game-default-button">Inventory</button>
              <button onMouseDown={this.playSound} className={`game-default-button ${state.selectToolUnlocked? '' : 'game-locked-button'}`}>{state.travelUnlocked? 'Select tool' : 'Locked'}</button>
              <button onMouseDown={this.playSound} className={`game-default-button`}>Milestones</button>
              <button onMouseDown={this.playSound} className={`game-default-button`}>Quest Book</button>
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