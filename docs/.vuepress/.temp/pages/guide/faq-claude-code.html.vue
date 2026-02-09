<template><div><h1 id="claude-code-常见问题" tabindex="-1"><a class="header-anchor" href="#claude-code-常见问题"><span>Claude Code 常见问题</span></a></h1>
<h3 id="claude-code-无法连接到-anthropic-服务" tabindex="-1"><a class="header-anchor" href="#claude-code-无法连接到-anthropic-服务"><span>[claude code 无法连接到 Anthropic 服务]</span></a></h3>
<p><strong>如果你是首次配置根据链接跳转到这一步，直接按照下面的教程运行命令即可</strong></p>
<p>使用npm安装完claude之后。
在命令行输入claude报了如下错误：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">Unable to connect to Anthropic services</span>
<span class="line">Failed to connect to api.anthropic.com: ERR BAD REQUEST</span>
<span class="line">lease check your internet connection and network settings.</span>
<span class="line">Note: Claude Code might not be available in your country, Check supported countries atnttps://anthropic.com/supported-countriesS E:ltoollclaude code></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或是在你初次配置时出现以下问题：</p>
<p><img src="@source/guide/faq-claude-code.assets/QQ_1770619595841.png" alt="img"></p>
<p>WindowsMacOS</p>
<ol>
<li>按下键盘 <code v-pre>Win + R</code> 键，输入 <code v-pre>cmd</code> 后回车，打开命令行程序</li>
<li>在命令行中运行以下命令后回车</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">powershell <span class="token parameter variable">-Command</span> <span class="token string">"<span class="token variable">$f</span>='%USERPROFILE%\.claude.json';<span class="token variable">$j</span>=Get-Content <span class="token variable">$f</span>|ConvertFrom-Json;<span class="token variable">$j</span>|Add-Member -NotePropertyName 'hasCompletedOnboarding' -NotePropertyValue <span class="token variable">$true</span> -Force;<span class="token variable">$j</span>|ConvertTo-Json|Set-Content <span class="token variable">$f</span>"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者：</p>
<p>找到配置文件：<code v-pre>C:\Users\你的用户名\.claude.json</code></p>
<p>把里面的 <code v-pre>hasCompletedOnboarding</code> 改成 <code v-pre>true</code> 即可：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"hasCompletedOnboarding"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启你的Claude Cli</p>
</div></template>


