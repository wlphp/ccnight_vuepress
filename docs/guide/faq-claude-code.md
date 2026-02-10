# Claude Code 常见问题

### [claude code 无法连接到 Anthropic 服务]

**如果你是首次配置根据链接跳转到这一步，直接按照下面的教程运行命令即可**

使用npm安装完claude之后。
在命令行输入claude报了如下错误：



```text
Unable to connect to Anthropic services
Failed to connect to api.anthropic.com: ERR BAD REQUEST
lease check your internet connection and network settings.
Note: Claude Code might not be available in your country, Check supported countries atnttps://anthropic.com/supported-countriesS E:ltoollclaude code>
```



或是在你初次配置时出现以下问题：

![img](faq-claude-code.assets/QQ_1770692034418.png)

   Windows或者mac：

1. 使用cc-swith配置

   ![img](faq-claude-code.assets/QQ_1770692125874.png)

   开启这个开关之后他也是帮你在.claude.json`中 "hasCompletedOnboarding": true 处理的这个。

2. 或者：

找到配置文件：`C:\Users\你的用户名\.claude.json`

把里面的 `hasCompletedOnboarding` 改成 `true` 即可：

如果没有这个的话，那么需要你手动新增一行。在下图位置



![img](faq-claude-code.assets/QQ_1770692260423.png)

```json
{
  "hasCompletedOnboarding": true
}
```

重启你的 Claude Cli