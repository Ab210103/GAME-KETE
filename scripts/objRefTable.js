const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.bound,
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.Button,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{"8Direction": 0},
	{BoundTo: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{TiledBackground: 0},
	{Anchor: 0},
	{score: 0},
	{Button: 0},
	{introd: 0},
	{fnis: 0},
	{EXIT: 0},
	{again: 0},
	{markah: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	score: class extends self.ITextInstance {},
	Button: class extends self.IButtonInstance {},
	introd: class extends self.ITextInstance {},
	fnis: class extends self.ITextInstance {},
	EXIT: class extends self.IButtonInstance {},
	again: class extends self.IButtonInstance {}
}