<template><div><h1 id="claude-code-配置" tabindex="-1"><a class="header-anchor" href="#claude-code-配置"><span>Claude Code 配置</span></a></h1>
<ol>
<li>
<p>打开你下载的CC Switch软件，你会看到如下图的初始界面</p>
<p>根据图片提示把请求地址和api key写好</p>
<p>https://cc.nightsoil.cn</p>
<p>sk-e4KxpZUVg1m1rHmVe93anbVHonpTy52nc8a5iijV4c6A2QQQ</p>
</li>
</ol>
<p><img src="@source/guide/claude-code-config.assets/QQ_1770617046576.png" alt="img"></p>
<p><img src="@source/guide/claude-code-config.assets/QQ_1770617099350.png" alt="img"></p>
<p><img src="@source/guide/claude-code-config.assets/QQ_1770617167201.png" alt="img"></p>
<p>{
&quot;env&quot;: {
&quot;ANTHROPIC_AUTH_TOKEN&quot;: &quot;sk-e4KxpZUVg1m1rHmVe93anbVHonpTy52nc8a5iijV4c6A2QQQ&quot;,
&quot;ANTHROPIC_BASE_URL&quot;: &quot;https://cc.nightsoil.cn&quot;,
&quot;CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC&quot;: &quot;1&quot;
},
&quot;model&quot;: &quot;opus&quot;,
&quot;permissions&quot;: {
&quot;allow&quot;: [],
&quot;deny&quot;: []
},
&quot;statusLine&quot;: {
&quot;command&quot;: &quot;%USERPROFILE%\.claude\ccline\ccline.exe&quot;,
&quot;padding&quot;: 0,
&quot;type&quot;: &quot;command&quot;
}
}</p>
<p>然后改成启用，点击测速返回 运行正常即可</p>
<p><img src="@source/guide/claude-code-config.assets/QQ_1770617255102.png" alt="img"></p>
<p>2.点击左上角“设置”按钮，在通用页面下拉找到 <code v-pre>跳过 Claude Code初次安装确认</code> ，务必勾选</p>
<p><img src="@source/guide/claude-code-config.assets/QQ_1770617403891.png" alt="img"></p>
<p>3.在终端运行 <code v-pre>claude</code>，看到对话界面并能正常回复即表示配置完成</p>
<p><img src="@source/guide/claude-code-config.assets/QQ_1770617428949.png" alt="img"></p>
</div></template>


