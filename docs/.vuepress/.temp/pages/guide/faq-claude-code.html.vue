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
<p><img src="@source/guide/faq-claude-code.assets/QQ_1770692034418.png" alt="img"></p>
<p>Windows或者mac：</p>
<ol>
<li>
<p>使用cc-swith配置</p>
<p><img src="@source/guide/faq-claude-code.assets/QQ_1770692125874.png" alt="img"></p>
<p>开启这个开关之后他也是帮你在.claude.json`中 &quot;hasCompletedOnboarding&quot;: true 处理的这个。</p>
</li>
<li>
<p>或者：</p>
</li>
</ol>
<p>找到配置文件：<code v-pre>C:\Users\你的用户名\.claude.json</code></p>
<p>把里面的 <code v-pre>hasCompletedOnboarding</code> 改成 <code v-pre>true</code> 即可：</p>
<p>如果没有这个的话，那么需要你手动新增一行。在下图位置</p>
<p><img src="@source/guide/faq-claude-code.assets/QQ_1770692260423.png" alt="img"></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"hasCompletedOnboarding"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启你的 Claude Cli</p>
</div></template>


