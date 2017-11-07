var res = {
    manifestUrl: "res/project.manifest",
    HelloWorld_png : "res/HelloWorld.png",
    chip_png:"res/chip.png",
    p_1_png:"res/p_1.png",
	test_png : "res/test.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
