#!/bin/bash
# adapted from http://unix.stackexchange.com/a/157594/110635
# and http://unix.stackexchange.com/a/220619/110635
W=1280
H=800
SIZE_TEST="%[fx:(h>$H && w>$W)]"'\n'

if test $# -lt 2; then
    echo "$0 source_folder -c to convert"
    exit 0
fi

echo "- Input folder: $1"
if test $2 == '-c'; then 
    echo "- Converting files!"
    convert="true"
fi

find $1 -type f \( -name \*.png -o -name \*.jp* -o -name \*.webm \) | while read f; do 
   width=$(exiftool -s -ImageWidth $f -S)
   height=$(exiftool -s -ImageHeight $f -S)
   if [[ $width -gt $W && $height -gt $H ]]; then
    file_size_kb=`du -k "$f" | cut -f1`
    file_info=$(identify -format "%wx%h\n" "$f")
    echo "Will be resized: $f ($file_size_kb kB) $file_info"
    if [ ! -z "$convert" ];
    then
     # see https://developers.google.com/speed/docs/insights/OptimizeImages
     mogrify -sampling-factor 4:2:0 -strip -quality 85  -resize ''"$W"x"$H"'' "$f"
    fi
  fi
done
  