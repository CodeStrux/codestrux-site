# Live filter narrowing the System profile to the two disk commands.
Set Shell bash
Set FontFamily "JetBrains Mono"
Set FontSize 40
Set Width 2400
Set Height 1500
Set Padding 48
Set Framerate 30
Set TypingSpeed 80ms
Set CursorBlink false
Set Theme { "name": "CodeStrux", "background": "#09101a", "foreground": "#e5ecf3", "cursor": "#efe4c7", "selection": "#293342", "black": "#04070f", "red": "#e0645f", "green": "#78c192", "yellow": "#d5b36a", "blue": "#6ea0e8", "magenta": "#ac9ad0", "cyan": "#82c7f0", "white": "#e5ecf3", "brightBlack": "#4b5666", "brightRed": "#f08a86", "brightGreen": "#91dbab", "brightYellow": "#eace8c", "brightBlue": "#96c0fe", "brightMagenta": "#c4b4e5", "brightCyan": "#a8dcfc", "brightWhite": "#f3f7fc" }
Output out/filter.txt

Hide
Type "PS1='\[\e[38;2;239;228;199m\]> \[\e[0m\]'; clear"
Enter
Show

Type "exc"
Enter
Wait+Screen /Enter run/
Sleep 1.5s
Type@140ms "disk"
Sleep 1.2s
Screenshot out/filter.png
Sleep 500ms
Escape
Sleep 300ms
