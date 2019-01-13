import React, { Component } from 'react';
import '../styles/game.css';
class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actionSelected: 'none',
      actionsAvailable: [
        {
          id: 'gather-materials',
          action: 'gatherMats',
          title: 'Gather materials'
        },
      ],
      age: 'wood',
      bagUnlocked: false,
      craftUnlocked: false,
      selectToolUnlocked: false,
      travelUnlocked:false,
      tradeUnlocked: false,
      wisdomUnlocked: false,
    }
  }
  render() {
    return (
      <article className="Game">
        <section className="game-left-section">
          <header>Idleife v0.1.0-alpha</header>
          <h1>Actions</h1>
          <ul>
            {this.state.actionsAvailable.map(el=>{
              return (
                <li id={el.id}>{el.title}</li>  
              )
            })}
          </ul>
        </section>
        <section className="game-right-section">
          <header></header>
          <main></main>
          <aside>
          </aside>
          <aside>
            <div className="game-unlockable-button-container">
              <button className="game-default-button shine">Craft</button>
              <button className="game-default-button">Travel</button>
              <button className="game-default-button">Trade</button>
              <button className="game-default-button">Wisdom</button>
            </div>
            <div className="game-settings-button-container">
              <button className="game-default-button">Settings</button>
            </div>
          </aside>
          <footer>
            <div className="game-hotbar-button-container">
              <button className="game-default-button shine">Inventory</button>
              <button className="game-default-button">Select Tool</button>
              <button className="game-default-button">Milestones</button>
              <button className="game-default-button">Quest Book</button>
            </div>
            <div className="game-bag-button-container">
              Bag
            </div>
          </footer>
        </section>
      </article>
    )
  }
}
export default Game;