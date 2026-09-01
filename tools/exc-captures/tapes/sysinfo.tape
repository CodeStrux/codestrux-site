# Full `exc sysinfo` panel; shorter canvas so the panel fills the frame.
Set Shell bash
Set FontFamily "JetBrains Mono"
Set FontSize 40
Set Width 2400
Set Height 1200
Set Padding 48
Set Framerate 30
Set TypingSpeed 80ms
Set CursorBlink false
Set Theme { "name": "CodeStrux", "background": "#101b14", "foreground": "#e6ede7", "cursor": "#42c070", "selection": "#2a362e", "black": "#08120c", "red": "#e0645f", "green": "#42c070", "yellow": "#e9b452", "blue": "#5fc9db", "magenta": "#fa7ba7", "cyan": "#5fc9db", "white": "#e6ede7", "brightBlack": "#4a564c", "brightRed": "#f08a86", "brightGreen": "#60db89", "brightYellow": "#f2c97e", "brightBlue": "#8ad9e6", "brightMagenta": "#fba4c0", "brightCyan": "#8ad9e6", "brightWhite": "#f4f8f4" }
Output out/sysinfo.txt

Hide
Type "PS1='\[\e[38;2;66;192;112m\]> \[\e[0m\]'; clear"
Enter
Show

Type "exc sysinfo"
Enter
Wait+Screen /aao@codestrux/
Sleep 800ms
Screenshot out/sysinfo.png
Sleep 500ms
