game.SpendExp = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('exp-screen')), -10);
		me.game.world.addChild(new (me.Renderable.extend({
			init: function(){
				this._super(me.Renderable, 'init', [10, 10, 300, 50]);
				this.font = new me.Font("Arial", 46, "white");
				//me.input.registerPointerEvent('pointerdown', this, this.newGame.bind(this), true);
			},
			draw: function(renderer){
				this.font.draw(renderer.getContext(), "Press F1-F4 to buy, press F5 to skip!", this.pos.x, this.pos.y);
				this.font.draw(renderer.getContext(), "Current Exp: " + me.save.exp.toString(), this.pos.x + 100, this.pos.y + 50);
				this.font.draw(renderer.getContext(), "F1: Increase Gold Production " + me.save.exp.toString(), this.pos.x + 200, this.pos.y + 100);
				this.font.draw(renderer.getContext(), "F2: Add Starting Gold " + me.save.exp.toString(), this.pos.x + 200, this.pos.y + 150);
				this.font.draw(renderer.getContext(), "F3: Increase Attack Damage " + me.save.exp.toString(), this.pos.x + 200, this.pos.y + 200);
				this.font.draw(renderer.getContext(), "F4: Increase Starting Health " + me.save.exp.toString(), this.pos.x + 200, this.pos.y + 250);

			},

			})));

			},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {

	}
});
