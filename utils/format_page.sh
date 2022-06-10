#!/bin/bash

[ $# -eq 0 ] && {
    echo "Use: $0 file1 [file2 file3]"
    exit 1
}

sed -i 's;^```c$;{% highlight c linenos %}; ; s;^```$;{% endhighlight %};' "$@"
