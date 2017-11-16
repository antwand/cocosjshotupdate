
var LoginLayer = cc.Layer.extend({
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
        var helloLabel = new cc.LabelTTF("========== LoginLayer 000 ====", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.login_chip);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);

        this.sprite2 = new cc.Sprite(res.login_chip);
        this.sprite2.attr({
            x: size.width / 2+260,
            y: size.height / 2
        });
        this.addChild(this.sprite2, 0);



        var button =new ccui.Button();
        button.x=size.width/2 + 200;
        button.y=size.height/2+ 200;
        button.loadTextures(res.login_p_2,res.login_p_2);
        button.addTouchEventListener(this.touchEvent, this);
        this.addChild(button);



        var button =new ccui.Button();
        button.x=size.width/2 - 200;
        button.y=size.height/2 -200 ;
        button.loadTextures(res.login_p,res.login_p);
        button.addTouchEventListener(this.touchEvent2, this);
        this.addChild(button);


        return true;
    },

    touchEvent2: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                //this._topDisplayLabel.setString("Touch Down");
                break;

            case ccui.Widget.TOUCH_MOVED:
                //this._topDisplayLabel.setString("Touch Move");
                break;

            case ccui.Widget.TOUCH_ENDED:
                var callBack =function () {
                    // cc.director.runScene(new LoginScene());
                    console.log("baijiale === 热更成功")
                }
                HotManager.hotUpdate(res.manifestUrl_baijiale,"baijiale",callBack);

                // cc.director.runScene(new Fight_100_Scene());
                // this._topDisplayLabel.setString("Touch Up");
                break;

            case ccui.Widget.TOUCH_CANCELED:
                //  this._topDisplayLabel.setString("Touch Cancelled");
                break;
            default:
                break;
        }
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
                cc.director.runScene(new Fight_100_Scene());

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

var LoginScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new LoginLayer();
        this.addChild(layer);
    }
});

