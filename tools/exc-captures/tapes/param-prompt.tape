# An answered visible param above an in-progress masked secret param.
# Ctrl+C aborts before the ssh command would run.
Set Shell bash
Set FontFamily "JetBrains Mono"
Set FontSize 40
Set Width 2400
Set Height 800
Set Padding 48
Set Framerate 30
Set TypingSpeed 80ms
Set CursorBlink false
Set Theme { "name": "CodeStrux", "background": "#09101a", "foreground": "#e5ecf3", "cursor": "#efe4c7", "selection": "#293342", "black": "#04070f", "red": "#e0645f", "green": "#78c192", "yellow": "#d5b36a", "blue": "#6ea0e8", "magenta": "#ac9ad0", "cyan": "#82c7f0", "white": "#e5ecf3", "brightBlack": "#4b5666", "brightRed": "#f08a86", "brightGreen": "#91dbab", "brightYellow": "#eace8c", "brightBlue": "#96c0fe", "brightMagenta": "#c4b4e5", "brightCyan": "#a8dcfc", "brightWhite": "#f3f7fc" }
Output out/param-prompt.txt

Hide
Type "PS1='\[\e[38;2;239;228;199m\]> \[\e[0m\]'; clear"
Enter
Show

Type "exc --profile deploy"
Enter
Wait+Screen /Enter run/
Sleep 1.2s
Enter
Wait+Screen /Staging host/
Sleep 600ms
Type@120ms "web-02.codestrux.tech"
Sleep 400ms
Enter
Wait+Screen /Deploy token/
Type@150ms "s3cr3t"
Sleep 800ms
Screenshot out/param-prompt.png
Sleep 600ms
Ctrl+C
Sleep 300ms
