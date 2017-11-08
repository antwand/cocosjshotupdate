
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("==========Hello World====", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        // this.sprite = new cc.Sprite(res.test_png);
        // this.sprite.attr({
        //     x: size.width / 2,
        //     y: size.height / 2
        // });
        // this.addChild(this.sprite, 0);


        this.sprite2 = new cc.Sprite(res.p_1_png);
        this.sprite2.attr({
            x: size.width / 2 + 300,
            y: size.height / 2 -240
        });
        this.addChild(this.sprite2, 2);


        // this.sprite3 = new cc.Sprite(res.chip_png);
        // this.sprite3.attr({
        //     x: size.width / 2 + 200,
        //     y: size.height / 2 -230
        // });
        // this.addChild(this.sprite3, 2);



        var button =new ccui.Button();
        button.x=size.width/2;
        button.y=size.height/2;
        button.loadTextures(res.HelloWorld_png,res.HelloWorld_png);
        button.addTouchEventListener(this.touchEvent, this);
        this.addChild(button);


        return true;
    },

    touchEvent: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                //this._topDisplayLabel.setString("Touch Down");
                break;

            case ccui.Widget.TOUCH_MOVED:
                //this._topDisplayLabel.setString("Touch Move");
                break;

            case ccui.Widget.TOUCH_ENDED:
                cc.director.runScene(new LoginScene());
               // this._topDisplayLabel.setString("Touch Up");
                break;

            case ccui.Widget.TOUCH_CANCELED:
              //  this._topDisplayLabel.setString("Touch Cancelled");
                break;
            default:
                break;
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

