#!/bin/sh

 ffmpeg \
	-re \
	-stream_loop -1 \
	-i "$1" \
	-window_size 12 \
	stream/song.mpd

