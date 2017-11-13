+++
date = "2016-02-21T20:03:07Z"
description = ""
draft = false
tags = ["l18n", "english to japanese translation"]
title = "Subtle English to Japanese Translation Errors"
topics = ["Software Localisation"]

+++

Words enclosed with &quot; &quot; and &#39; &#39; are typically translated into 『 』 and 「 」 respectively in Japanese.

While localising software into Japanese recently, I came across the following string:

```
" and "
```

<!--more-->

Whatever translation tool you are using might automatically translate it into something like:

```
『 および 』
```

That is understandable.

Even though it looks grammatically correct, I don't know where such a translation would be useful.

Referring back to the source file where the string came from, it was clear that the correct translation was:

```
』および『
```

If you were given the string alone, it would be quite easy to translate it incorrectly.

It shows that correctly bundling content with its context as one unit would reduce potential translation errors.