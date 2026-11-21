import sys,os,re
root=sys.argv[1]; out=sys.argv[2]
s=open(os.path.join(root,'index.html')).read()
cfg=open(os.path.join(root,'content/config.js')).read()
files=re.search(r'files: \[([^\]]+)\]',cfg).group(1)
files=[f.strip().strip('"') for f in files.split(',')]
parts=[cfg]+[open(os.path.join(root,'content/gina-2026',f)).read() for f in files]
inline="<script>\n"+"\n".join(parts).replace("</script","<\\/script")+"\n</script>"
tag='<script src="content/config.js"></script>'
assert tag in s
s=s.replace(tag,inline)
open(out,'w').write(s); print(out, len(s))
