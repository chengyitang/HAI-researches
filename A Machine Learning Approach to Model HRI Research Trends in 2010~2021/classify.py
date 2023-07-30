with open("/Users/tangchengyi/Desktop/Topic Modeling/HRI_dic_low.txt", mode="w") as low, open("/Users/tangchengyi/Desktop/Topic Modeling/HRI_dic_abbr.txt", mode="w") as abbr:
    with open("/Users/tangchengyi/Desktop/Topic Modeling/HRI_dic_all.txt", mode="r") as dictread:
        lines = dictread.readlines() 
        count = -1
        lowdict = set()
        abbrdict = set()
        while (count < 1859):
            count+=1
            if (lines[count].isupper()):
                abbrdict.add(lines[count])
            else:
                lower = lines[count].lower()
                lowdict.add(lower)  
    ldict = sorted(list(lowdict)) 
    adict = sorted(list(abbrdict))
    for l in ldict:
        low.write(l)
    for a in adict:
        abbr.write(a)