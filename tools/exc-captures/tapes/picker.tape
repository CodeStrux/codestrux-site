# Hero shot: sysinfo header + numbered column-major grid + profile tabs.
Set Shell bash
Set FontFamily "JetBrains Mono"
Set FontSize 40
Set Width 2400
Set Height 1500
Set Padding 48
Set Framerate 30
Set TypingSpeed 80ms
Set CursorBlink false
Set Theme { "name": "CodeStrux", "background": "#101b14", "foreground": "#e6ede7", "cursor": "#42c070", "selection": "#2a362e", "black": "#08120c", "red": "#e0645f", "green": "#42c070", "yellow": "#e9b452", "blue": "#5fc9db", "magenta": "#fa7ba7", "cyan": "#5fc9db", "white": "#e6ede7", "brightBlack": "#4a564c", "brightRed": "#f08a86", "brightGreen": "#60db89", "brightYellow": "#f2c97e", "brightBlue": "#8ad9e6", "brightMagenta": "#fba4c0", "brightCyan": "#8ad9e6", "brightWhite": "#f4f8f4" }
Output out/picker.txt

Hide
Type "PS1='\[\e[38;2;66;192;112m\]> \[\e[0m\]'; clear"
Enter
Show

Type "exc"
Sleep 500ms
Enter
Wait+Screen /Enter run/
Sleep 2s
Screenshot out/picker.png
Sleep 500ms
Escape
Sleep 300ms
