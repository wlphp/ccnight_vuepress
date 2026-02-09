<template><div><h1 id="cc-switch-使用" tabindex="-1"><a class="header-anchor" href="#cc-switch-使用"><span>cc-switch 使用</span></a></h1>
<h3 id="cc-switch介绍" tabindex="-1"><a class="header-anchor" href="#cc-switch介绍"><span><a href="https://docs.packyapi.com/docs/ccswitch/#cc-switch%E4%BB%8B%E7%BB%8D" target="_blank" rel="noopener noreferrer">CC-Switch介绍</a></span></a></h3>
<h3 id="claude-code-codex-gemini-cli-全方位辅助工具" tabindex="-1"><a class="header-anchor" href="#claude-code-codex-gemini-cli-全方位辅助工具"><span>Claude Code / Codex / Gemini CLI 全方位辅助工具</span></a></h3>
<p><a href="https://github.com/farion1231/cc-switch/releases" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/version-3.7.1-blue.svg" alt="Version"></a>
<a href="https://github.com/trending/typescript" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/🔥_TypeScript_Trending-Daily | Weekly | Monthly-ff6b6b.svg" alt="Trending"></a>
<a href="https://github.com/farion1231/cc-switch/releases" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/platform-Windows | macOS | Linux-lightgrey.svg" alt="Platform"></a>
<a href="https://tauri.app/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/built with-Tauri 2-orange.svg" alt="Built with Tauri"></a>
<a href="https://github.com/farion1231/cc-switch/releases/latest" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/endpoint?url=https://api.pinstudios.net/api/badges/downloads/farion1231/cc-switch/total" alt="Downloads"></a></p>
<p><a href="https://trendshift.io/repositories/15372" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/repositories/15372" alt="farion1231%2Fcc-switch | Trendshift"></a></p>
<p><a href="https://github.com/farion1231/cc-switch/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">更新日志</a> | <a href="https://github.com/farion1231/cc-switch/releases/latest" target="_blank" rel="noopener noreferrer">下载地址</a></p>
<p><strong>从供应商切换器到 AI CLI 一体化管理平台</strong></p>
<p><strong>统一管理 Claude Code、Codex 与 Gemini CLI 的供应商配置、MCP 服务器、Skills 扩展和系统提示词。</strong></p>
<p>使用 CC-Switch，您可以：</p>
<ul>
<li>✅ 一键切换 API 配置 - 在多个 API 提供商之间快速切换</li>
<li>✅ 可视化配置管理 - 通过图形界面轻松管理所有配置</li>
<li>✅ MCP 服务器管理 - 管理 Model Context Protocol 服务器</li>
<li>✅ 系统托盘快捷操作 - 通过托盘菜单快速切换</li>
</ul>
<h3 id="软件下载" tabindex="-1"><a class="header-anchor" href="#软件下载"><span><a href="https://docs.packyapi.com/docs/ccswitch/#%E8%BD%AF%E4%BB%B6%E4%B8%8B%E8%BD%BD" target="_blank" rel="noopener noreferrer">软件下载</a></span></a></h3>
<p>WindowsMacOSLinux</p>
<ol>
<li>
<p>点击下载链接→<a href="https://github.com/farion1231/cc-switch/releases/latest" target="_blank" rel="noopener noreferrer">传送门</a>←，进入CC-Switch的Github Release页面</p>
</li>
<li>
<p>鼠标滚动到最下方选择适合自己版本的安装包，windows系统推荐下载普通msi后缀的安装包进行安装</p>
</li>
<li>
<p>安装后运行CC-Switch主程序，界面如下。</p>
</li>
</ol>
<p><img src="@source/guide/cc-switch.assets/QQ_1770616364391.png" alt="img"></p>
<p>注意</p>
<p><strong>请你最好进行此步的环境检查步骤！！！
如果你有经验，能确认你的Nodejs环境以及cc、codex、gemini的cli安装没问题，配置目录也都存在，可以忽略这一步，直接进入以下的CC Switch配置</strong></p>
<p>点击右侧传送门查看 <a href="">如何进行环境检查？</a></p>
<h2 id="claude-code配置" tabindex="-1"><a class="header-anchor" href="#claude-code配置"><span>[ Claude Code配置]</span></a></h2>
<ol>
<li>
<p>打开你下载的CC Switch软件，你会看到如下图的初始界面</p>
<p>根据图片提示把请求地址和api key写好</p>
<p>https://cc.nightsoil.cn</p>
<p>sk-e4KxpZUVg1m1rHmVe93anbVHonpTy52nc8a5iijV4c6A2QQQ</p>
</li>
</ol>
<p><img src="@source/guide/cc-switch.assets/QQ_1770617046576.png" alt="img"></p>
<p><img src="@source/guide/cc-switch.assets/QQ_1770617099350.png" alt="img"></p>
<p><img src="@source/guide/cc-switch.assets/QQ_1770617167201.png" alt="img"></p>
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
<p><img src="@source/guide/cc-switch.assets/QQ_1770617255102.png" alt="img"></p>
<p>2.点击左上角“设置”按钮，在通用页面下拉找到 <code v-pre>跳过 Claude Code初次安装确认</code> ，务必勾选</p>
<p><img src="@source/guide/cc-switch.assets/QQ_1770617403891.png" alt="img"></p>
<p>3.在终端运行 <code v-pre>claude</code>，看到对话界面并能正常回复即表示配置完成</p>
<p><img src="@source/guide/cc-switch.assets/QQ_1770617428949.png" alt="img"></p>
<h2 id="codex配置" tabindex="-1"><a class="header-anchor" href="#codex配置"><span>[ Codex配置]</span></a></h2>
<p>npm i -g @openai/<a href="mailto:codex@v0.91.0" target="_blank" rel="noopener noreferrer">codex@v0.91.0</a></p>
<ol>
<li>打开你下载的CC Switch软件，你会看到如下图的初始界面</li>
</ol>
<p><img src="@source/guide/cc-switch.assets/QQ_1770617507867.png" alt="img"></p>
<p>2.填写api地址和api key</p>
<p>api key :sk-e4KxpZUVg1m1rHmVe93anbVHonpTy52nc8a5iijV4c6A2QQQ</p>
<p>api 请求地址：https://cc.nightsoil.cn/v1</p>
<p><img src="@source/guide/cc-switch.assets/QQ_1770617726437.png" alt="img"></p>
<p>3.添加成功后，在主界面会看到我们配置的分组，在右侧点击“启用”按钮，显示“使用中”，则配置完成</p>
<p><img src="@source/guide/cc-switch.assets/QQ_1770617751023.png" alt="img"></p>
<p>4.在终端运行 <code v-pre>codex</code>，看到对话界面并能正常回复即表示配置完成</p>
<p><img src="@source/guide/cc-switch.assets/QQ_1770618130373.png" alt="img"></p>
<h2 id="gemini配置" tabindex="-1"><a class="header-anchor" href="#gemini配置"><span>[ Gemini配置]</span></a></h2>
<p>​    安装：npm i -g @google/gemini-cli@latest</p>
<ol>
<li>打开你下载的CC Switch软件，你会看到如下图的初始界面</li>
</ol>
<p><img src="@source/guide/cc-switch.assets/QQ_1770618229087.png" alt="img">2.下拉模态框，找到“API Key”配置项，填入你刚才复制的ApiKey，再点击右下角“添加”按钮</p>
<p>GOOGLE_GEMINI_BASE_URL=https://cc.nightsoil.cn
GEMINI_API_KEY=sk-e4KxpZUVg1m1rHmVe93anbVHonpTy52nc8a5iijV4c6A2QQQ
GEMINI_MODEL=gemini-3-pro-high</p>
<p><img src="@source/guide/cc-switch.assets/QQ_1770618299596.png" alt="img"></p>
<p>3.添加成功后，在主界面会看到我们配置的分组，在右侧点击“启用”按钮，显示“使用中”，则配置完成</p>
<p>![img](file:///C:\Users\wl\AppData\Local\Temp\QQ_1770618299596.png)</p>
<p><img src="@source/guide/cc-switch.assets/QQ_1770618347087.png" alt="img"></p>
<p>4.在终端运行 <code v-pre>gemini</code>，看到对话界面并能正常回复即表示配置完成</p>
<p><img src="@source/guide/cc-switch.assets/QQ_1770618601311.png" alt="img"></p>
</div></template>


