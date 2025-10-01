# spells for a shell

```
rm *.html
for f in *.md; do pandoc -f markdown -t html --wrap=none --lua-filter=filter.lua --template=../template.html -o ${f%.*}.html -M name="${f%.*}" $f; done
```

```
cd img/src
for i in *.png; do didder -i $i -o ../$i --palette '#211E18 #734545 #747851 #818234 #89A890 #AD5640 #BD744C #E5D5B3' --saturation 2 -x 384 edm FloydSteinberg; done
```