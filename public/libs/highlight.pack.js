!(function (e) {
  "undefined" != typeof exports
    ? e(exports)
    : ((window.hljs = e({})),
      "function" == typeof define &&
        define.amd &&
        define([], function () {
          return window.hljs;
        }));
})(function (e) {
  function n(e) {
    return e
      .replace(/&/gm, "&amp;")
      .replace(/</gm, "&lt;")
      .replace(/>/gm, "&gt;");
  }
  function t(e) {
    return e.nodeName.toLowerCase();
  }
  function r(e, n) {
    var t = e && e.exec(n);
    return t && 0 == t.index;
  }
  function a(e) {
    var n = (
      e.className +
      " " +
      (e.parentNode ? e.parentNode.className : "")
    ).split(/\s+/);
    return (
      (n = n.map(function (e) {
        return e.replace(/^lang(uage)?-/, "");
      })),
      n.filter(function (e) {
        return N(e) || /no(-?)highlight|plain|text/.test(e);
      })[0]
    );
  }
  function i(e, n) {
    var t,
      r = {};
    for (t in e) r[t] = e[t];
    if (n) for (t in n) r[t] = n[t];
    return r;
  }
  function o(e) {
    var n = [];
    return (
      (function r(e, a) {
        for (var i = e.firstChild; i; i = i.nextSibling)
          3 == i.nodeType
            ? (a += i.nodeValue.length)
            : 1 == i.nodeType &&
              (n.push({
                event: "start",
                offset: a,
                node: i,
              }),
              (a = r(i, a)),
              t(i).match(/br|hr|img|input/) ||
                n.push({
                  event: "stop",
                  offset: a,
                  node: i,
                }));
        return a;
      })(e, 0),
      n
    );
  }
  function u(e, r, a) {
    function i() {
      return e.length && r.length
        ? e[0].offset != r[0].offset
          ? e[0].offset < r[0].offset
            ? e
            : r
          : "start" == r[0].event
          ? e
          : r
        : e.length
        ? e
        : r;
    }
    function o(e) {
      function r(e) {
        return " " + e.nodeName + '="' + n(e.value) + '"';
      }
      l +=
        "<" + t(e) + Array.prototype.map.call(e.attributes, r).join("") + ">";
    }
    function u(e) {
      l += "</" + t(e) + ">";
    }
    function c(e) {
      ("start" == e.event ? o : u)(e.node);
    }
    for (var s = 0, l = "", f = []; e.length || r.length; ) {
      var g = i();
      if (((l += n(a.substr(s, g[0].offset - s))), (s = g[0].offset), g == e)) {
        f.reverse().forEach(u);
        do c(g.splice(0, 1)[0]), (g = i());
        while (g == e && g.length && g[0].offset == s);
        f.reverse().forEach(o);
      } else
        "start" == g[0].event ? f.push(g[0].node) : f.pop(),
          c(g.splice(0, 1)[0]);
    }
    return l + n(a.substr(s));
  }
  function c(e) {
    function n(e) {
      return (e && e.source) || e;
    }
    function t(t, r) {
      return new RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""));
    }
    function r(a, o) {
      if (!a.compiled) {
        if (((a.compiled = !0), (a.k = a.k || a.bK), a.k)) {
          var u = {},
            c = function (n, t) {
              e.cI && (t = t.toLowerCase()),
                t.split(" ").forEach(function (e) {
                  var t = e.split("|");
                  u[t[0]] = [n, t[1] ? Number(t[1]) : 1];
                });
            };
          "string" == typeof a.k
            ? c("keyword", a.k)
            : Object.keys(a.k).forEach(function (e) {
                c(e, a.k[e]);
              }),
            (a.k = u);
        }
        (a.lR = t(a.l || /\b\w+\b/, !0)),
          o &&
            (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"),
            a.b || (a.b = /\B|\b/),
            (a.bR = t(a.b)),
            a.e || a.eW || (a.e = /\B|\b/),
            a.e && (a.eR = t(a.e)),
            (a.tE = n(a.e) || ""),
            a.eW && o.tE && (a.tE += (a.e ? "|" : "") + o.tE)),
          a.i && (a.iR = t(a.i)),
          void 0 === a.r && (a.r = 1),
          a.c || (a.c = []);
        var s = [];
        a.c.forEach(function (e) {
          e.v
            ? e.v.forEach(function (n) {
                s.push(i(e, n));
              })
            : s.push("self" == e ? a : e);
        }),
          (a.c = s),
          a.c.forEach(function (e) {
            r(e, a);
          }),
          a.starts && r(a.starts, o);
        var l = a.c
          .map(function (e) {
            return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b;
          })
          .concat([a.tE, a.i])
          .map(n)
          .filter(Boolean);
        a.t = l.length
          ? t(l.join("|"), !0)
          : {
              exec: function () {
                return null;
              },
            };
      }
    }
    r(e);
  }
  function s(e, t, a, i) {
    function o(e, n) {
      for (var t = 0; t < n.c.length; t++) if (r(n.c[t].bR, e)) return n.c[t];
    }
    function u(e, n) {
      if (r(e.eR, n)) {
        for (; e.endsParent && e.parent; ) e = e.parent;
        return e;
      }
      return e.eW ? u(e.parent, n) : void 0;
    }
    function f(e, n) {
      return !a && r(n.iR, e);
    }
    function g(e, n) {
      var t = E.cI ? n[0].toLowerCase() : n[0];
      return e.k.hasOwnProperty(t) && e.k[t];
    }
    function p(e, n, t, r) {
      var a = r ? "" : x.classPrefix,
        i = '<span class="' + a,
        o = t ? "" : "</span>";
      return (i += e + '">'), i + n + o;
    }
    function d() {
      if (!L.k) return n(y);
      var e = "",
        t = 0;
      L.lR.lastIndex = 0;
      for (var r = L.lR.exec(y); r; ) {
        e += n(y.substr(t, r.index - t));
        var a = g(L, r);
        a ? ((B += a[1]), (e += p(a[0], n(r[0])))) : (e += n(r[0])),
          (t = L.lR.lastIndex),
          (r = L.lR.exec(y));
      }
      return e + n(y.substr(t));
    }
    function h() {
      if (L.sL && !w[L.sL]) return n(y);
      var e = L.sL ? s(L.sL, y, !0, M[L.sL]) : l(y);
      return (
        L.r > 0 && (B += e.r),
        "continuous" == L.subLanguageMode && (M[L.sL] = e.top),
        p(e.language, e.value, !1, !0)
      );
    }
    function b() {
      return void 0 !== L.sL ? h() : d();
    }
    function v(e, t) {
      var r = e.cN ? p(e.cN, "", !0) : "";
      e.rB
        ? ((k += r), (y = ""))
        : e.eB
        ? ((k += n(t) + r), (y = ""))
        : ((k += r), (y = t)),
        (L = Object.create(e, {
          parent: {
            value: L,
          },
        }));
    }
    function m(e, t) {
      if (((y += e), void 0 === t)) return (k += b()), 0;
      var r = o(t, L);
      if (r) return (k += b()), v(r, t), r.rB ? 0 : t.length;
      var a = u(L, t);
      if (a) {
        var i = L;
        i.rE || i.eE || (y += t), (k += b());
        do L.cN && (k += "</span>"), (B += L.r), (L = L.parent);
        while (L != a.parent);
        return (
          i.eE && (k += n(t)),
          (y = ""),
          a.starts && v(a.starts, ""),
          i.rE ? 0 : t.length
        );
      }
      if (f(t, L))
        throw new Error(
          'Illegal lexeme "' + t + '" for mode "' + (L.cN || "<unnamed>") + '"'
        );
      return (y += t), t.length || 1;
    }
    var E = N(e);
    if (!E) throw new Error('Unknown language: "' + e + '"');
    c(E);
    var R,
      L = i || E,
      M = {},
      k = "";
    for (R = L; R != E; R = R.parent) R.cN && (k = p(R.cN, "", !0) + k);
    var y = "",
      B = 0;
    try {
      for (var C, j, I = 0; ; ) {
        if (((L.t.lastIndex = I), (C = L.t.exec(t)), !C)) break;
        (j = m(t.substr(I, C.index - I), C[0])), (I = C.index + j);
      }
      for (m(t.substr(I)), R = L; R.parent; R = R.parent)
        R.cN && (k += "</span>");
      return {
        r: B,
        value: k,
        language: e,
        top: L,
      };
    } catch (S) {
      if (-1 != S.message.indexOf("Illegal"))
        return {
          r: 0,
          value: n(t),
        };
      throw S;
    }
  }
  function l(e, t) {
    t = t || x.languages || Object.keys(w);
    var r = {
        r: 0,
        value: n(e),
      },
      a = r;
    return (
      t.forEach(function (n) {
        if (N(n)) {
          var t = s(n, e, !1);
          (t.language = n),
            t.r > a.r && (a = t),
            t.r > r.r && ((a = r), (r = t));
        }
      }),
      a.language && (r.second_best = a),
      r
    );
  }
  function f(e) {
    return (
      x.tabReplace &&
        (e = e.replace(/^((<[^>]+>|\t)+)/gm, function (e, n) {
          return n.replace(/\t/g, x.tabReplace);
        })),
      x.useBR && (e = e.replace(/\n/g, "<br>")),
      e
    );
  }
  function g(e, n, t) {
    var r = n ? E[n] : t,
      a = [e.trim()];
    return (
      e.match(/\bhljs\b/) || a.push("hljs"),
      -1 === e.indexOf(r) && a.push(r),
      a.join(" ").trim()
    );
  }
  function p(e) {
    var n = a(e);
    if (!/no(-?)highlight|plain|text/.test(n)) {
      var t;
      x.useBR
        ? ((t = document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "div"
          )),
          (t.innerHTML = e.innerHTML
            .replace(/\n/g, "")
            .replace(/<br[ \/]*>/g, "\n")))
        : (t = e);
      var r = t.textContent,
        i = n ? s(n, r, !0) : l(r),
        c = o(t);
      if (c.length) {
        var p = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
        (p.innerHTML = i.value), (i.value = u(c, o(p), r));
      }
      (i.value = f(i.value)),
        (e.innerHTML = i.value),
        (e.className = g(e.className, n, i.language)),
        (e.result = {
          language: i.language,
          re: i.r,
        }),
        i.second_best &&
          (e.second_best = {
            language: i.second_best.language,
            re: i.second_best.r,
          });
    }
  }
  function d(e) {
    x = i(x, e);
  }
  function h() {
    if (!h.called) {
      h.called = !0;
      var e = document.querySelectorAll("pre code");
      Array.prototype.forEach.call(e, p);
    }
  }
  function b() {
    addEventListener("DOMContentLoaded", h, !1),
      addEventListener("load", h, !1);
  }
  function v(n, t) {
    var r = (w[n] = t(e));
    r.aliases &&
      r.aliases.forEach(function (e) {
        E[e] = n;
      });
  }
  function m() {
    return Object.keys(w);
  }
  function N(e) {
    return w[e] || w[E[e]];
  }
  var x = {
      classPrefix: "hljs-",
      tabReplace: null,
      useBR: !1,
      languages: void 0,
    },
    w = {},
    E = {};
  return (
    (e.highlight = s),
    (e.highlightAuto = l),
    (e.fixMarkup = f),
    (e.highlightBlock = p),
    (e.configure = d),
    (e.initHighlighting = h),
    (e.initHighlightingOnLoad = b),
    (e.registerLanguage = v),
    (e.listLanguages = m),
    (e.getLanguage = N),
    (e.inherit = i),
    (e.IR = "[a-zA-Z]\\w*"),
    (e.UIR = "[a-zA-Z_]\\w*"),
    (e.NR = "\\b\\d+(\\.\\d+)?"),
    (e.CNR = "\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
    (e.BNR = "\\b(0b[01]+)"),
    (e.RSR =
      "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
    (e.BE = {
      b: "\\\\[\\s\\S]",
      r: 0,
    }),
    (e.ASM = {
      cN: "string",
      b: "'",
      e: "'",
      i: "\\n",
      c: [e.BE],
    }),
    (e.QSM = {
      cN: "string",
      b: '"',
      e: '"',
      i: "\\n",
      c: [e.BE],
    }),
    (e.PWM = {
      b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/,
    }),
    (e.C = function (n, t, r) {
      var a = e.inherit(
        {
          cN: "comment",
          b: n,
          e: t,
          c: [],
        },
        r || {}
      );
      return a.c.push(e.PWM), a;
    }),
    (e.CLCM = e.C("//", "$")),
    (e.CBCM = e.C("/\\*", "\\*/")),
    (e.HCM = e.C("#", "$")),
    (e.NM = {
      cN: "number",
      b: e.NR,
      r: 0,
    }),
    (e.CNM = {
      cN: "number",
      b: e.CNR,
      r: 0,
    }),
    (e.BNM = {
      cN: "number",
      b: e.BNR,
      r: 0,
    }),
    (e.CSSNM = {
      cN: "number",
      b:
        e.NR +
        "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      r: 0,
    }),
    (e.RM = {
      cN: "regexp",
      b: /\//,
      e: /\/[gimuy]*/,
      i: /\n/,
      c: [
        e.BE,
        {
          b: /\[/,
          e: /\]/,
          r: 0,
          c: [e.BE],
        },
      ],
    }),
    (e.TM = {
      cN: "title",
      b: e.IR,
      r: 0,
    }),
    (e.UTM = {
      cN: "title",
      b: e.UIR,
      r: 0,
    }),
    e
  );
});
hljs.registerLanguage("dart", function (e) {
  var t = {
      cN: "subst",
      b: "\\$\\{",
      e: "}",
      k: "true false null this is new super",
    },
    r = {
      cN: "string",
      v: [
        {
          b: "r'''",
          e: "'''",
        },
        {
          b: 'r"""',
          e: '"""',
        },
        {
          b: "r'",
          e: "'",
          i: "\\n",
        },
        {
          b: 'r"',
          e: '"',
          i: "\\n",
        },
        {
          b: "'''",
          e: "'''",
          c: [e.BE, t],
        },
        {
          b: '"""',
          e: '"""',
          c: [e.BE, t],
        },
        {
          b: "'",
          e: "'",
          i: "\\n",
          c: [e.BE, t],
        },
        {
          b: '"',
          e: '"',
          i: "\\n",
          c: [e.BE, t],
        },
      ],
    };
  t.c = [e.CNM, r];
  var n = {
    keyword:
      "assert break case catch class const continue default do else enum extends false final finally for if in is new null rethrow return super switch this throw true try var void while with",
    literal:
      "abstract as dynamic export external factory get implements import library operator part set static typedef",
    built_in:
      "print Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set Stopwatch String StringBuffer StringSink Symbol Type Uri bool double int num document window querySelector querySelectorAll Element ElementList",
  };
  return {
    k: n,
    c: [
      r,
      {
        cN: "dartdoc",
        b: "/\\*\\*",
        e: "\\*/",
        sL: "markdown",
        subLanguageMode: "continuous",
      },
      {
        cN: "dartdoc",
        b: "///",
        e: "$",
        sL: "markdown",
        subLanguageMode: "continuous",
      },
      e.CLCM,
      e.CBCM,
      {
        cN: "class",
        bK: "class interface",
        e: "{",
        eE: !0,
        c: [
          {
            bK: "extends implements",
          },
          e.UTM,
        ],
      },
      e.CNM,
      {
        cN: "annotation",
        b: "@[A-Za-z]+",
      },
      {
        b: "=>",
      },
    ],
  };
});
hljs.registerLanguage("json", function (e) {
  var t = {
      literal: "true false null",
    },
    i = [e.QSM, e.CNM],
    l = {
      cN: "value",
      e: ",",
      eW: !0,
      eE: !0,
      c: i,
      k: t,
    },
    c = {
      b: "{",
      e: "}",
      c: [
        {
          cN: "attribute",
          b: '\\s*"',
          e: '"\\s*:\\s*',
          eB: !0,
          eE: !0,
          c: [e.BE],
          i: "\\n",
          starts: l,
        },
      ],
      i: "\\S",
    },
    n = {
      b: "\\[",
      e: "\\]",
      c: [
        e.inherit(l, {
          cN: null,
        }),
      ],
      i: "\\S",
    };
  return (
    i.splice(i.length, 0, c, n),
    {
      c: i,
      k: t,
      i: "\\S",
    }
  );
});
hljs.registerLanguage("powershell", function (e) {
  var t = {
      b: "`[\\s\\S]",
      r: 0,
    },
    r = {
      cN: "variable",
      v: [
        {
          b: /\$[\w\d][\w\d_:]*/,
        },
      ],
    },
    o = {
      cN: "string",
      b: /"/,
      e: /"/,
      c: [
        t,
        r,
        {
          cN: "variable",
          b: /\$[A-z]/,
          e: /[^A-z]/,
        },
      ],
    },
    a = {
      cN: "string",
      b: /'/,
      e: /'/,
    };
  return {
    aliases: ["ps"],
    l: /-?[A-z\.\-]+/,
    cI: !0,
    k: {
      keyword:
        "if else foreach return function do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch",
      literal: "$null $true $false",
      built_in:
        "Add-Content Add-History Add-Member Add-PSSnapin Clear-Content Clear-Item Clear-Item Property Clear-Variable Compare-Object ConvertFrom-SecureString Convert-Path ConvertTo-Html ConvertTo-SecureString Copy-Item Copy-ItemProperty Export-Alias Export-Clixml Export-Console Export-Csv ForEach-Object Format-Custom Format-List Format-Table Format-Wide Get-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command Get-Content Get-Credential Get-Culture Get-Date Get-EventLog Get-ExecutionPolicy Get-Help Get-History Get-Host Get-Item Get-ItemProperty Get-Location Get-Member Get-PfxCertificate Get-Process Get-PSDrive Get-PSProvider Get-PSSnapin Get-Service Get-TraceSource Get-UICulture Get-Unique Get-Variable Get-WmiObject Group-Object Import-Alias Import-Clixml Import-Csv Invoke-Expression Invoke-History Invoke-Item Join-Path Measure-Command Measure-Object Move-Item Move-ItemProperty New-Alias New-Item New-ItemProperty New-Object New-PSDrive New-Service New-TimeSpan New-Variable Out-Default Out-File Out-Host Out-Null Out-Printer Out-String Pop-Location Push-Location Read-Host Remove-Item Remove-ItemProperty Remove-PSDrive Remove-PSSnapin Remove-Variable Rename-Item Rename-ItemProperty Resolve-Path Restart-Service Resume-Service Select-Object Select-String Set-Acl Set-Alias Set-AuthenticodeSignature Set-Content Set-Date Set-ExecutionPolicy Set-Item Set-ItemProperty Set-Location Set-PSDebug Set-Service Set-TraceSource Set-Variable Sort-Object Split-Path Start-Service Start-Sleep Start-Transcript Stop-Process Stop-Service Stop-Transcript Suspend-Service Tee-Object Test-Path Trace-Command Update-FormatData Update-TypeData Where-Object Write-Debug Write-Error Write-Host Write-Output Write-Progress Write-Verbose Write-Warning",
      operator:
        "-ne -eq -lt -gt -ge -le -not -like -notlike -match -notmatch -contains -notcontains -in -notin -replace",
    },
    c: [e.HCM, e.NM, o, a, r],
  };
});
hljs.registerLanguage("sql", function (e) {
  var t = e.C("--", "$");
  return {
    cI: !0,
    i: /[<>]/,
    c: [
      {
        cN: "operator",
        bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
        e: /;/,
        eW: !0,
        k: {
          keyword:
            "abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",
          literal: "true false null",
          built_in:
            "array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text",
        },
        c: [
          {
            cN: "string",
            b: "'",
            e: "'",
            c: [
              e.BE,
              {
                b: "''",
              },
            ],
          },
          {
            cN: "string",
            b: '"',
            e: '"',
            c: [
              e.BE,
              {
                b: '""',
              },
            ],
          },
          {
            cN: "string",
            b: "`",
            e: "`",
            c: [e.BE],
          },
          e.CNM,
          e.CBCM,
          t,
        ],
      },
      e.CBCM,
      t,
    ],
  };
});
hljs.registerLanguage("clojure", function (e) {
  var t = {
      built_in:
        "def cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize",
    },
    r = "a-zA-Z_\\-!.?+*=<>&#'",
    n = "[" + r + "][" + r + "0-9/;:]*",
    a = "[-+]?\\d+(\\.\\d+)?",
    o = {
      b: n,
      r: 0,
    },
    s = {
      cN: "number",
      b: a,
      r: 0,
    },
    i = e.inherit(e.QSM, {
      i: null,
    }),
    c = e.C(";", "$", {
      r: 0,
    }),
    d = {
      cN: "literal",
      b: /\b(true|false|nil)\b/,
    },
    l = {
      cN: "collection",
      b: "[\\[\\{]",
      e: "[\\]\\}]",
    },
    m = {
      cN: "comment",
      b: "\\^" + n,
    },
    p = e.C("\\^\\{", "\\}"),
    u = {
      cN: "attribute",
      b: "[:]" + n,
    },
    f = {
      cN: "list",
      b: "\\(",
      e: "\\)",
    },
    h = {
      eW: !0,
      r: 0,
    },
    y = {
      k: t,
      l: n,
      cN: "keyword",
      b: n,
      starts: h,
    },
    b = [f, i, m, p, c, u, l, s, d, o];
  return (
    (f.c = [e.C("comment", ""), y, h]),
    (h.c = b),
    (l.c = b),
    {
      aliases: ["clj"],
      i: /\S/,
      c: [f, i, m, p, c, u, l, s, d],
    }
  );
});
hljs.registerLanguage("javascript", function (e) {
  return {
    aliases: ["js"],
    k: {
      keyword:
        "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as await",
      literal: "true false null undefined NaN Infinity",
      built_in:
        "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise",
    },
    c: [
      {
        cN: "pi",
        r: 10,
        v: [
          {
            b: /^\s*('|")use strict('|")/,
          },
          {
            b: /^\s*('|")use asm('|")/,
          },
        ],
      },
      e.ASM,
      e.QSM,
      {
        cN: "string",
        b: "`",
        e: "`",
        c: [
          e.BE,
          {
            cN: "subst",
            b: "\\$\\{",
            e: "\\}",
          },
        ],
      },
      e.CLCM,
      e.CBCM,
      {
        cN: "number",
        b: "\\b(0[xXbBoO][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        r: 0,
      },
      {
        b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
        k: "return throw case",
        c: [
          e.CLCM,
          e.CBCM,
          e.RM,
          {
            b: /</,
            e: />\s*[);\]]/,
            r: 0,
            sL: "xml",
          },
        ],
        r: 0,
      },
      {
        cN: "function",
        bK: "function",
        e: /\{/,
        eE: !0,
        c: [
          e.inherit(e.TM, {
            b: /[A-Za-z$_][0-9A-Za-z$_]*/,
          }),
          {
            cN: "params",
            b: /\(/,
            e: /\)/,
            c: [e.CLCM, e.CBCM],
            i: /["'\(]/,
          },
        ],
        i: /\[|%/,
      },
      {
        b: /\$[(.]/,
      },
      {
        b: "\\." + e.IR,
        r: 0,
      },
      {
        bK: "import",
        e: "[;$]",
        k: "import from as",
        c: [e.ASM, e.QSM],
      },
      {
        cN: "class",
        bK: "class",
        e: /[{;=]/,
        eE: !0,
        i: /[:"\[\]]/,
        c: [
          {
            bK: "extends",
          },
          e.UTM,
        ],
      },
    ],
  };
});
hljs.registerLanguage("gradle", function (e) {
  return {
    cI: !0,
    k: {
      keyword:
        "task project allprojects subprojects artifacts buildscript configurations dependencies repositories sourceSets description delete from into include exclude source classpath destinationDir includes options sourceCompatibility targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant def abstract break case catch continue default do else extends final finally for if implements instanceof native new private protected public return static switch synchronized throw throws transient try volatile while strictfp package import false null super this true antlrtask checkstyle codenarc copy boolean byte char class double float int interface long short void compile runTime file fileTree abs any append asList asWritable call collect compareTo count div dump each eachByte eachFile eachLine every find findAll flatten getAt getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter newReader newWriter next plus pop power previous print println push putAt read readBytes readLines reverse reverseEach round size sort splitEachLine step subMap times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader withStream withWriter withWriterAppend write writeLine",
    },
    c: [e.CLCM, e.CBCM, e.ASM, e.QSM, e.NM, e.RM],
  };
});
hljs.registerLanguage("swift", function (e) {
  var i = {
      keyword:
        "class deinit enum extension func import init let protocol static struct subscript typealias var break case continue default do else fallthrough if in for return switch where while as dynamicType is new super self Self Type __COLUMN__ __FILE__ __FUNCTION__ __LINE__ associativity didSet get infix inout left mutating none nonmutating operator override postfix precedence prefix right set unowned unowned safe unsafe weak willSet",
      literal: "true false nil",
      built_in:
        "abs advance alignof alignofValue assert bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal false filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced join lexicographicalCompare map max maxElement min minElement nil numericCast partition posix print println quickSort reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith strideof strideofValue swap swift toString transcode true underestimateCount unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafePointers withVaList",
    },
    t = {
      cN: "type",
      b: "\\b[A-Z][\\w']*",
      r: 0,
    },
    n = e.C("/\\*", "\\*/", {
      c: ["self"],
    }),
    r = {
      cN: "subst",
      b: /\\\(/,
      e: "\\)",
      k: i,
      c: [],
    },
    s = {
      cN: "number",
      b: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
      r: 0,
    },
    o = e.inherit(e.QSM, {
      c: [r, e.BE],
    });
  return (
    (r.c = [s]),
    {
      k: i,
      c: [
        o,
        e.CLCM,
        n,
        t,
        s,
        {
          cN: "func",
          bK: "func",
          e: "{",
          eE: !0,
          c: [
            e.inherit(e.TM, {
              b: /[A-Za-z$_][0-9A-Za-z$_]*/,
              i: /\(/,
            }),
            {
              cN: "generics",
              b: /</,
              e: />/,
              i: />/,
            },
            {
              cN: "params",
              b: /\(/,
              e: /\)/,
              endsParent: !0,
              k: i,
              c: [
                "self",
                s,
                o,
                e.CBCM,
                {
                  b: ":",
                },
              ],
              i: /["']/,
            },
          ],
          i: /\[|%/,
        },
        {
          cN: "class",
          bK: "struct protocol class extension enum",
          k: i,
          e: "\\{",
          eE: !0,
          c: [
            e.inherit(e.TM, {
              b: /[A-Za-z$_][0-9A-Za-z$_]*/,
            }),
          ],
        },
        {
          cN: "preprocessor",
          b: "(@assignment|@class_protocol|@exported|@final|@lazy|@noreturn|@NSCopying|@NSManaged|@objc|@optional|@required|@auto_closure|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix)",
        },
      ],
    }
  );
});
hljs.registerLanguage("lisp", function (b) {
  var e =
      "[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*",
    c = "\\|[^]*?\\|",
    r =
      "(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?",
    a = {
      cN: "shebang",
      b: "^#!",
      e: "$",
    },
    i = {
      cN: "literal",
      b: "\\b(t{1}|nil)\\b",
    },
    l = {
      cN: "number",
      v: [
        {
          b: r,
          r: 0,
        },
        {
          b: "#(b|B)[0-1]+(/[0-1]+)?",
        },
        {
          b: "#(o|O)[0-7]+(/[0-7]+)?",
        },
        {
          b: "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?",
        },
        {
          b: "#(c|C)\\(" + r + " +" + r,
          e: "\\)",
        },
      ],
    },
    t = b.inherit(b.QSM, {
      i: null,
    }),
    d = b.C(";", "$", {
      r: 0,
    }),
    n = {
      cN: "variable",
      b: "\\*",
      e: "\\*",
    },
    u = {
      cN: "keyword",
      b: "[:&]" + e,
    },
    N = {
      b: e,
      r: 0,
    },
    o = {
      b: c,
    },
    s = {
      b: "\\(",
      e: "\\)",
      c: ["self", i, t, l, N],
    },
    v = {
      cN: "quoted",
      c: [l, t, n, u, s, N],
      v: [
        {
          b: "['`]\\(",
          e: "\\)",
        },
        {
          b: "\\(quote ",
          e: "\\)",
          k: "quote",
        },
        {
          b: "'" + c,
        },
      ],
    },
    f = {
      cN: "quoted",
      v: [
        {
          b: "'" + e,
        },
        {
          b: "#'" + e + "(::" + e + ")*",
        },
      ],
    },
    g = {
      cN: "list",
      b: "\\(\\s*",
      e: "\\)",
    },
    q = {
      eW: !0,
      r: 0,
    };
  return (
    (g.c = [
      {
        cN: "keyword",
        v: [
          {
            b: e,
          },
          {
            b: c,
          },
        ],
      },
      q,
    ]),
    (q.c = [v, f, g, i, l, t, d, n, u, o, N]),
    {
      i: /\S/,
      c: [l, a, i, t, d, v, f, g, N],
    }
  );
});
hljs.registerLanguage("d", function (e) {
  var r = {
      keyword:
        "abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
      built_in:
        "bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
      literal: "false null true",
    },
    t = "(0|[1-9][\\d_]*)",
    a = "(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)",
    i = "0[bB][01_]+",
    n = "([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",
    c = "0[xX]" + n,
    _ = "([eE][+-]?" + a + ")",
    d = "(" + a + "(\\.\\d*|" + _ + ")|\\d+\\." + a + a + "|\\." + t + _ + "?)",
    o = "(0[xX](" + n + "\\." + n + "|\\.?" + n + ")[pP][+-]?" + a + ")",
    s = "(" + t + "|" + i + "|" + c + ")",
    l = "(" + o + "|" + d + ")",
    u =
      "\\\\(['\"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};",
    b = {
      cN: "number",
      b: "\\b" + s + "(L|u|U|Lu|LU|uL|UL)?",
      r: 0,
    },
    f = {
      cN: "number",
      b: "\\b(" + l + "([fF]|L|i|[fF]i|Li)?|" + s + "(i|[fF]i|Li))",
      r: 0,
    },
    g = {
      cN: "string",
      b: "'(" + u + "|.)",
      e: "'",
      i: ".",
    },
    h = {
      b: u,
      r: 0,
    },
    p = {
      cN: "string",
      b: '"',
      c: [h],
      e: '"[cwd]?',
    },
    w = {
      cN: "string",
      b: '[rq]"',
      e: '"[cwd]?',
      r: 5,
    },
    N = {
      cN: "string",
      b: "`",
      e: "`[cwd]?",
    },
    A = {
      cN: "string",
      b: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
      r: 10,
    },
    F = {
      cN: "string",
      b: 'q"\\{',
      e: '\\}"',
    },
    m = {
      cN: "shebang",
      b: "^#!",
      e: "$",
      r: 5,
    },
    y = {
      cN: "preprocessor",
      b: "#(line)",
      e: "$",
      r: 5,
    },
    L = {
      cN: "keyword",
      b: "@[a-zA-Z_][a-zA-Z_\\d]*",
    },
    v = e.C("\\/\\+", "\\+\\/", {
      c: ["self"],
      r: 10,
    });
  return {
    l: e.UIR,
    k: r,
    c: [e.CLCM, e.CBCM, v, A, p, w, N, F, f, b, g, m, y, L],
  };
});
hljs.registerLanguage("scheme", function (e) {
  var t = "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",
    r = "(\\-|\\+)?\\d+([./]\\d+)?",
    i = r + "[+\\-]" + r + "i",
    a = {
      built_in:
        "case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?",
    },
    n = {
      cN: "shebang",
      b: "^#!",
      e: "$",
    },
    c = {
      cN: "literal",
      b: "(#t|#f|#\\\\" + t + "|#\\\\.)",
    },
    l = {
      cN: "number",
      v: [
        {
          b: r,
          r: 0,
        },
        {
          b: i,
          r: 0,
        },
        {
          b: "#b[0-1]+(/[0-1]+)?",
        },
        {
          b: "#o[0-7]+(/[0-7]+)?",
        },
        {
          b: "#x[0-9a-f]+(/[0-9a-f]+)?",
        },
      ],
    },
    s = e.QSM,
    o = [
      e.C(";", "$", {
        r: 0,
      }),
      e.C("#\\|", "\\|#"),
    ],
    u = {
      b: t,
      r: 0,
    },
    p = {
      cN: "variable",
      b: "'" + t,
    },
    d = {
      eW: !0,
      r: 0,
    },
    g = {
      cN: "list",
      v: [
        {
          b: "\\(",
          e: "\\)",
        },
        {
          b: "\\[",
          e: "\\]",
        },
      ],
      c: [
        {
          cN: "keyword",
          b: t,
          l: t,
          k: a,
        },
        d,
      ],
    };
  return (
    (d.c = [c, l, s, u, p, g].concat(o)),
    {
      i: /\S/,
      c: [n, l, s, p, g].concat(o),
    }
  );
});
hljs.registerLanguage("erlang-repl", function (r) {
  return {
    k: {
      special_functions: "spawn spawn_link self",
      reserved:
        "after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor",
    },
    c: [
      {
        cN: "prompt",
        b: "^[0-9]+> ",
        r: 10,
      },
      r.C("%", "$"),
      {
        cN: "number",
        b: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
        r: 0,
      },
      r.ASM,
      r.QSM,
      {
        cN: "constant",
        b: "\\?(::)?([A-Z]\\w*(::)?)+",
      },
      {
        cN: "arrow",
        b: "->",
      },
      {
        cN: "ok",
        b: "ok",
      },
      {
        cN: "exclamation_mark",
        b: "!",
      },
      {
        cN: "function_or_atom",
        b: "(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
        r: 0,
      },
      {
        cN: "variable",
        b: "[A-Z][a-zA-Z0-9_']*",
        r: 0,
      },
    ],
  };
});
hljs.registerLanguage("php", function (e) {
  var c = {
      cN: "variable",
      b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*",
    },
    i = {
      cN: "preprocessor",
      b: /<\?(php)?|\?>/,
    },
    a = {
      cN: "string",
      c: [e.BE, i],
      v: [
        {
          b: 'b"',
          e: '"',
        },
        {
          b: "b'",
          e: "'",
        },
        e.inherit(e.ASM, {
          i: null,
        }),
        e.inherit(e.QSM, {
          i: null,
        }),
      ],
    },
    n = {
      v: [e.BNM, e.CNM],
    };
  return {
    aliases: ["php3", "php4", "php5", "php6"],
    cI: !0,
    k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
    c: [
      e.CLCM,
      e.HCM,
      e.C("/\\*", "\\*/", {
        c: [
          {
            cN: "phpdoc",
            b: "\\s@[A-Za-z]+",
          },
          i,
        ],
      }),
      e.C("__halt_compiler.+?;", !1, {
        eW: !0,
        k: "__halt_compiler",
        l: e.UIR,
      }),
      {
        cN: "string",
        b: "<<<['\"]?\\w+['\"]?$",
        e: "^\\w+;",
        c: [e.BE],
      },
      i,
      c,
      {
        b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
      },
      {
        cN: "function",
        bK: "function",
        e: /[;{]/,
        eE: !0,
        i: "\\$|\\[|%",
        c: [
          e.UTM,
          {
            cN: "params",
            b: "\\(",
            e: "\\)",
            c: ["self", c, e.CBCM, a, n],
          },
        ],
      },
      {
        cN: "class",
        bK: "class interface",
        e: "{",
        eE: !0,
        i: /[:\(\$"]/,
        c: [
          {
            bK: "extends implements",
          },
          e.UTM,
        ],
      },
      {
        bK: "namespace",
        e: ";",
        i: /[\.']/,
        c: [e.UTM],
      },
      {
        bK: "use",
        e: ";",
        c: [e.UTM],
      },
      {
        b: "=>",
      },
      a,
      n,
    ],
  };
});
hljs.registerLanguage("cpp", function (t) {
  var i = {
    keyword:
      "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary intmax_t uintmax_t int8_t uint8_t int16_t uint16_t int32_t uint32_t  int64_t uint64_t int_least8_t uint_least8_t int_least16_t uint_least16_t int_least32_t uint_least32_t int_least64_t uint_least64_t int_fast8_t uint_fast8_t int_fast16_t uint_fast16_t int_fast32_t uint_fast32_t int_fast64_t uint_fast64_t intptr_t uintptr_t atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong atomic_wchar_t atomic_char16_t atomic_char32_t atomic_intmax_t atomic_uintmax_t atomic_intptr_t atomic_uintptr_t atomic_size_t atomic_ptrdiff_t atomic_int_least8_t atomic_int_least16_t atomic_int_least32_t atomic_int_least64_t atomic_uint_least8_t atomic_uint_least16_t atomic_uint_least32_t atomic_uint_least64_t atomic_int_fast8_t atomic_int_fast16_t atomic_int_fast32_t atomic_int_fast64_t atomic_uint_fast8_t atomic_uint_fast16_t atomic_uint_fast32_t atomic_uint_fast64_t",
    built_in:
      "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf",
  };
  return {
    aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
    k: i,
    i: "</",
    c: [
      t.CLCM,
      t.CBCM,
      t.QSM,
      {
        cN: "string",
        b: "'\\\\?.",
        e: "'",
        i: ".",
      },
      {
        cN: "number",
        b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)",
      },
      t.CNM,
      {
        cN: "preprocessor",
        b: "#",
        e: "$",
        k: "if else elif endif define undef warning error line pragma",
        c: [
          {
            b: /\\\n/,
            r: 0,
          },
          {
            b: 'include\\s*[<"]',
            e: '[>"]',
            k: "include",
            i: "\\n",
          },
          t.CLCM,
        ],
      },
      {
        b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
        e: ">",
        k: i,
        c: ["self"],
      },
      {
        b: t.IR + "::",
        k: i,
      },
      {
        bK: "new throw return else",
        r: 0,
      },
      {
        cN: "function",
        b: "(" + t.IR + "\\s+)+" + t.IR + "\\s*\\(",
        rB: !0,
        e: /[{;=]/,
        eE: !0,
        k: i,
        c: [
          {
            b: t.IR + "\\s*\\(",
            rB: !0,
            c: [t.TM],
            r: 0,
          },
          {
            cN: "params",
            b: /\(/,
            e: /\)/,
            k: i,
            r: 0,
            c: [t.CBCM],
          },
          t.CLCM,
          t.CBCM,
        ],
      },
    ],
  };
});
hljs.registerLanguage("java", function (e) {
  var a = e.UIR + "(<" + e.UIR + ">)?",
    t =
      "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
    c =
      "(\\b(0b[01_]+)|\\b0[xX][a-fA-F0-9_]+|(\\b[\\d_]+(\\.[\\d_]*)?|\\.[\\d_]+)([eE][-+]?\\d+)?)[lLfF]?",
    r = {
      cN: "number",
      b: c,
      r: 0,
    };
  return {
    aliases: ["jsp"],
    k: t,
    i: /<\//,
    c: [
      {
        cN: "javadoc",
        b: "/\\*\\*",
        e: "\\*/",
        r: 0,
        c: [
          {
            cN: "javadoctag",
            b: "(^|\\s)@[A-Za-z]+",
          },
        ],
      },
      e.CLCM,
      e.CBCM,
      e.ASM,
      e.QSM,
      {
        cN: "class",
        bK: "class interface",
        e: /[{;=]/,
        eE: !0,
        k: "class interface",
        i: /[:"\[\]]/,
        c: [
          {
            bK: "extends implements",
          },
          e.UTM,
        ],
      },
      {
        bK: "new throw return",
        r: 0,
      },
      {
        cN: "function",
        b: "(" + a + "\\s+)+" + e.UIR + "\\s*\\(",
        rB: !0,
        e: /[{;=]/,
        eE: !0,
        k: t,
        c: [
          {
            b: e.UIR + "\\s*\\(",
            rB: !0,
            r: 0,
            c: [e.UTM],
          },
          {
            cN: "params",
            b: /\(/,
            e: /\)/,
            k: t,
            r: 0,
            c: [e.ASM, e.QSM, e.CNM, e.CBCM],
          },
          e.CLCM,
          e.CBCM,
        ],
      },
      r,
      {
        cN: "annotation",
        b: "@[A-Za-z]+",
      },
    ],
  };
});
hljs.registerLanguage("coffeescript", function (e) {
  var c = {
      keyword:
        "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
      literal: "true false null undefined yes no on off",
      reserved:
        "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
      built_in: "npm require console print module global window document",
    },
    n = "[A-Za-z$_][0-9A-Za-z$_]*",
    t = {
      cN: "subst",
      b: /#\{/,
      e: /}/,
      k: c,
    },
    r = [
      e.BNM,
      e.inherit(e.CNM, {
        starts: {
          e: "(\\s*/)?",
          r: 0,
        },
      }),
      {
        cN: "string",
        v: [
          {
            b: /'''/,
            e: /'''/,
            c: [e.BE],
          },
          {
            b: /'/,
            e: /'/,
            c: [e.BE],
          },
          {
            b: /"""/,
            e: /"""/,
            c: [e.BE, t],
          },
          {
            b: /"/,
            e: /"/,
            c: [e.BE, t],
          },
        ],
      },
      {
        cN: "regexp",
        v: [
          {
            b: "///",
            e: "///",
            c: [t, e.HCM],
          },
          {
            b: "//[gim]*",
            r: 0,
          },
          {
            b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/,
          },
        ],
      },
      {
        cN: "property",
        b: "@" + n,
      },
      {
        b: "`",
        e: "`",
        eB: !0,
        eE: !0,
        sL: "javascript",
      },
    ];
  t.c = r;
  var i = e.inherit(e.TM, {
      b: n,
    }),
    s = "(\\(.*\\))?\\s*\\B[-=]>",
    o = {
      cN: "params",
      b: "\\([^\\(]",
      rB: !0,
      c: [
        {
          b: /\(/,
          e: /\)/,
          k: c,
          c: ["self"].concat(r),
        },
      ],
    };
  return {
    aliases: ["coffee", "cson", "iced"],
    k: c,
    i: /\/\*/,
    c: r.concat([
      e.C("###", "###"),
      e.HCM,
      {
        cN: "function",
        b: "^\\s*" + n + "\\s*=\\s*" + s,
        e: "[-=]>",
        rB: !0,
        c: [i, o],
      },
      {
        b: /[:\(,=]\s*/,
        r: 0,
        c: [
          {
            cN: "function",
            b: s,
            e: "[-=]>",
            rB: !0,
            c: [o],
          },
        ],
      },
      {
        cN: "class",
        bK: "class",
        e: "$",
        i: /[:="\[\]]/,
        c: [
          {
            bK: "extends",
            eW: !0,
            i: /[:="\[\]]/,
            c: [i],
          },
          i,
        ],
      },
      {
        cN: "attribute",
        b: n + ":",
        e: ":",
        rB: !0,
        rE: !0,
        r: 0,
      },
    ]),
  };
});
hljs.registerLanguage("fsharp", function (e) {
  var t = {
    b: "<",
    e: ">",
    c: [
      e.inherit(e.TM, {
        b: /'[a-zA-Z0-9_]+/,
      }),
    ],
  };
  return {
    aliases: ["fs"],
    k: "yield! return! let! do!abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield",
    c: [
      {
        cN: "string",
        b: '@"',
        e: '"',
        c: [
          {
            b: '""',
          },
        ],
      },
      {
        cN: "string",
        b: '"""',
        e: '"""',
      },
      e.C("\\(\\*", "\\*\\)"),
      {
        cN: "class",
        bK: "type",
        e: "\\(|=|$",
        eE: !0,
        c: [e.UTM, t],
      },
      {
        cN: "annotation",
        b: "\\[<",
        e: ">\\]",
        r: 10,
      },
      {
        cN: "attribute",
        b: "\\B('[A-Za-z])\\b",
        c: [e.BE],
      },
      e.CLCM,
      e.inherit(e.QSM, {
        i: null,
      }),
      e.CNM,
    ],
  };
});
hljs.registerLanguage("protobuf", function (e) {
  return {
    k: {
      keyword: "package import option optional required repeated group",
      built_in:
        "double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes",
      literal: "true false",
    },
    c: [
      e.QSM,
      e.NM,
      e.CLCM,
      {
        cN: "class",
        bK: "message enum service",
        e: /\{/,
        i: /\n/,
        c: [
          e.inherit(e.TM, {
            starts: {
              eW: !0,
              eE: !0,
            },
          }),
        ],
      },
      {
        cN: "function",
        bK: "rpc",
        e: /;/,
        eE: !0,
        k: "rpc returns",
      },
      {
        cN: "constant",
        b: /^\s*[A-Z_]+/,
        e: /\s*=/,
        eE: !0,
      },
    ],
  };
});
hljs.registerLanguage("http", function (t) {
  return {
    aliases: ["https"],
    i: "\\S",
    c: [
      {
        cN: "status",
        b: "^HTTP/[0-9\\.]+",
        e: "$",
        c: [
          {
            cN: "number",
            b: "\\b\\d{3}\\b",
          },
        ],
      },
      {
        cN: "request",
        b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
        rB: !0,
        e: "$",
        c: [
          {
            cN: "string",
            b: " ",
            e: " ",
            eB: !0,
            eE: !0,
          },
        ],
      },
      {
        cN: "attribute",
        b: "^\\w",
        e: ": ",
        eE: !0,
        i: "\\n|\\s|=",
        starts: {
          cN: "string",
          e: "$",
        },
      },
      {
        b: "\\n\\n",
        starts: {
          sL: "",
          eW: !0,
        },
      },
    ],
  };
});
hljs.registerLanguage("go", function (e) {
  var t = {
    keyword:
      "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer",
    constant: "true false iota nil",
    typename:
      "bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
    built_in:
      "append cap close complex copy imag len make new panic print println real recover delete",
  };
  return {
    aliases: ["golang"],
    k: t,
    i: "</",
    c: [
      e.CLCM,
      e.CBCM,
      e.QSM,
      {
        cN: "string",
        b: "'",
        e: "[^\\\\]'",
      },
      {
        cN: "string",
        b: "`",
        e: "`",
      },
      {
        cN: "number",
        b: e.CNR + "[dflsi]?",
        r: 0,
      },
      e.CNM,
    ],
  };
});
hljs.registerLanguage("xml", function (t) {
  var e = "[A-Za-z0-9\\._:-]+",
    s = {
      b: /<\?(php)?(?!\w)/,
      e: /\?>/,
      sL: "php",
      subLanguageMode: "continuous",
    },
    c = {
      eW: !0,
      i: /</,
      r: 0,
      c: [
        s,
        {
          cN: "attribute",
          b: e,
          r: 0,
        },
        {
          b: "=",
          r: 0,
          c: [
            {
              cN: "value",
              c: [s],
              v: [
                {
                  b: /"/,
                  e: /"/,
                },
                {
                  b: /'/,
                  e: /'/,
                },
                {
                  b: /[^\s\/>]+/,
                },
              ],
            },
          ],
        },
      ],
    };
  return {
    aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
    cI: !0,
    c: [
      {
        cN: "doctype",
        b: "<!DOCTYPE",
        e: ">",
        r: 10,
        c: [
          {
            b: "\\[",
            e: "\\]",
          },
        ],
      },
      t.C("<!--", "-->", {
        r: 10,
      }),
      {
        cN: "cdata",
        b: "<\\!\\[CDATA\\[",
        e: "\\]\\]>",
        r: 10,
      },
      {
        cN: "tag",
        b: "<style(?=\\s|>|$)",
        e: ">",
        k: {
          title: "style",
        },
        c: [c],
        starts: {
          e: "</style>",
          rE: !0,
          sL: "css",
        },
      },
      {
        cN: "tag",
        b: "<script(?=\\s|>|$)",
        e: ">",
        k: {
          title: "script",
        },
        c: [c],
        starts: {
          e: "</script>",
          rE: !0,
          sL: "",
        },
      },
      s,
      {
        cN: "pi",
        b: /<\?\w+/,
        e: /\?>/,
        r: 10,
      },
      {
        cN: "tag",
        b: "</?",
        e: "/?>",
        c: [
          {
            cN: "title",
            b: /[^ \/><\n\t]+/,
            r: 0,
          },
          c,
        ],
      },
    ],
  };
});
hljs.registerLanguage("r", function (e) {
  var r = "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
  return {
    c: [
      e.HCM,
      {
        b: r,
        l: r,
        k: {
          keyword:
            "function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...",
          literal:
            "NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
        },
        r: 0,
      },
      {
        cN: "number",
        b: "0[xX][0-9a-fA-F]+[Li]?\\b",
        r: 0,
      },
      {
        cN: "number",
        b: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
        r: 0,
      },
      {
        cN: "number",
        b: "\\d+\\.(?!\\d)(?:i\\b)?",
        r: 0,
      },
      {
        cN: "number",
        b: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
        r: 0,
      },
      {
        cN: "number",
        b: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
        r: 0,
      },
      {
        b: "`",
        e: "`",
        r: 0,
      },
      {
        cN: "string",
        c: [e.BE],
        v: [
          {
            b: '"',
            e: '"',
          },
          {
            b: "'",
            e: "'",
          },
        ],
      },
    ],
  };
});
hljs.registerLanguage("bash", function (e) {
  var t = {
      cN: "variable",
      v: [
        {
          b: /\$[\w\d#@][\w\d_]*/,
        },
        {
          b: /\$\{(.*?)}/,
        },
      ],
    },
    s = {
      cN: "string",
      b: /"/,
      e: /"/,
      c: [
        e.BE,
        t,
        {
          cN: "variable",
          b: /\$\(/,
          e: /\)/,
          c: [e.BE],
        },
      ],
    },
    a = {
      cN: "string",
      b: /'/,
      e: /'/,
    };
  return {
    aliases: ["sh", "zsh"],
    l: /-?[a-z\.]+/,
    k: {
      keyword: "if then else elif fi for while in do done case esac function",
      literal: "true false",
      built_in:
        "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
      operator: "-ne -eq -lt -gt -f -d -e -s -l -a",
    },
    c: [
      {
        cN: "shebang",
        b: /^#![^\n]+sh\s*$/,
        r: 10,
      },
      {
        cN: "function",
        b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        rB: !0,
        c: [
          e.inherit(e.TM, {
            b: /\w[\w\d_]*/,
          }),
        ],
        r: 0,
      },
      e.HCM,
      e.NM,
      s,
      a,
      t,
    ],
  };
});
hljs.registerLanguage("haskell", function (e) {
  var c = [
      e.C("--", "$"),
      e.C("{-", "-}", {
        c: ["self"],
      }),
    ],
    a = {
      cN: "pragma",
      b: "{-#",
      e: "#-}",
    },
    i = {
      cN: "preprocessor",
      b: "^#",
      e: "$",
    },
    n = {
      cN: "type",
      b: "\\b[A-Z][\\w']*",
      r: 0,
    },
    t = {
      cN: "container",
      b: "\\(",
      e: "\\)",
      i: '"',
      c: [
        a,
        i,
        {
          cN: "type",
          b: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?",
        },
        e.inherit(e.TM, {
          b: "[_a-z][\\w']*",
        }),
      ].concat(c),
    },
    l = {
      cN: "container",
      b: "{",
      e: "}",
      c: t.c,
    };
  return {
    aliases: ["hs"],
    k: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
    c: [
      {
        cN: "module",
        b: "\\bmodule\\b",
        e: "where",
        k: "module where",
        c: [t].concat(c),
        i: "\\W\\.|;",
      },
      {
        cN: "import",
        b: "\\bimport\\b",
        e: "$",
        k: "import|0 qualified as hiding",
        c: [t].concat(c),
        i: "\\W\\.|;",
      },
      {
        cN: "class",
        b: "^(\\s*)?(class|instance)\\b",
        e: "where",
        k: "class family instance where",
        c: [n, t].concat(c),
      },
      {
        cN: "typedef",
        b: "\\b(data|(new)?type)\\b",
        e: "$",
        k: "data family type newtype deriving",
        c: [a, n, t, l].concat(c),
      },
      {
        cN: "default",
        bK: "default",
        e: "$",
        c: [n, t].concat(c),
      },
      {
        cN: "infix",
        bK: "infix infixl infixr",
        e: "$",
        c: [e.CNM].concat(c),
      },
      {
        cN: "foreign",
        b: "\\bforeign\\b",
        e: "$",
        k: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
        c: [n, e.QSM].concat(c),
      },
      {
        cN: "shebang",
        b: "#!\\/usr\\/bin\\/env runhaskell",
        e: "$",
      },
      a,
      i,
      e.QSM,
      e.CNM,
      n,
      e.inherit(e.TM, {
        b: "^[_a-z][\\w']*",
      }),
      {
        b: "->|<-",
      },
    ].concat(c),
  };
});
hljs.registerLanguage("cs", function (e) {
  var r =
      "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
    t = e.IR + "(<" + e.IR + ">)?";
  return {
    aliases: ["csharp"],
    k: r,
    i: /::/,
    c: [
      e.C("///", "$", {
        rB: !0,
        c: [
          {
            cN: "xmlDocTag",
            v: [
              {
                b: "///",
                r: 0,
              },
              {
                b: "<!--|-->",
              },
              {
                b: "</?",
                e: ">",
              },
            ],
          },
        ],
      }),
      e.CLCM,
      e.CBCM,
      {
        cN: "preprocessor",
        b: "#",
        e: "$",
        k: "if else elif endif define undef warning error line region endregion pragma checksum",
      },
      {
        cN: "string",
        b: '@"',
        e: '"',
        c: [
          {
            b: '""',
          },
        ],
      },
      e.ASM,
      e.QSM,
      e.CNM,
      {
        bK: "class namespace interface",
        e: /[{;=]/,
        i: /[^\s:]/,
        c: [e.TM, e.CLCM, e.CBCM],
      },
      {
        bK: "new return throw await",
        r: 0,
      },
      {
        cN: "function",
        b: "(" + t + "\\s+)+" + e.IR + "\\s*\\(",
        rB: !0,
        e: /[{;=]/,
        eE: !0,
        k: r,
        c: [
          {
            b: e.IR + "\\s*\\(",
            rB: !0,
            c: [e.TM],
            r: 0,
          },
          {
            cN: "params",
            b: /\(/,
            e: /\)/,
            k: r,
            r: 0,
            c: [e.ASM, e.QSM, e.CNM, e.CBCM],
          },
          e.CLCM,
          e.CBCM,
        ],
      },
    ],
  };
});
hljs.registerLanguage("python", function (e) {
  var r = {
      cN: "prompt",
      b: /^(>>>|\.\.\.) /,
    },
    b = {
      cN: "string",
      c: [e.BE],
      v: [
        {
          b: /(u|b)?r?'''/,
          e: /'''/,
          c: [r],
          r: 10,
        },
        {
          b: /(u|b)?r?"""/,
          e: /"""/,
          c: [r],
          r: 10,
        },
        {
          b: /(u|r|ur)'/,
          e: /'/,
          r: 10,
        },
        {
          b: /(u|r|ur)"/,
          e: /"/,
          r: 10,
        },
        {
          b: /(b|br)'/,
          e: /'/,
        },
        {
          b: /(b|br)"/,
          e: /"/,
        },
        e.ASM,
        e.QSM,
      ],
    },
    l = {
      cN: "number",
      r: 0,
      v: [
        {
          b: e.BNR + "[lLjJ]?",
        },
        {
          b: "\\b(0o[0-7]+)[lLjJ]?",
        },
        {
          b: e.CNR + "[lLjJ]?",
        },
      ],
    },
    c = {
      cN: "params",
      b: /\(/,
      e: /\)/,
      c: ["self", r, l, b],
    };
  return {
    aliases: ["py", "gyp"],
    k: {
      keyword:
        "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
      built_in: "Ellipsis NotImplemented",
    },
    i: /(<\/|->|\?)/,
    c: [
      r,
      l,
      b,
      e.HCM,
      {
        v: [
          {
            cN: "function",
            bK: "def",
            r: 10,
          },
          {
            cN: "class",
            bK: "class",
          },
        ],
        e: /:/,
        i: /[${=;\n,]/,
        c: [e.UTM, c],
      },
      {
        cN: "decorator",
        b: /@/,
        e: /$/,
      },
      {
        b: /\b(print|exec)\(/,
      },
    ],
  };
});
hljs.registerLanguage("thrift", function (e) {
  var t = "bool byte i16 i32 i64 double string binary";
  return {
    k: {
      keyword:
        "namespace const typedef struct enum service exception void oneway set list map required optional",
      built_in: t,
      literal: "true false",
    },
    c: [
      e.QSM,
      e.NM,
      e.CLCM,
      e.CBCM,
      {
        cN: "class",
        bK: "struct enum service exception",
        e: /\{/,
        i: /\n/,
        c: [
          e.inherit(e.TM, {
            starts: {
              eW: !0,
              eE: !0,
            },
          }),
        ],
      },
      {
        b: "\\b(set|list|map)\\s*<",
        e: ">",
        k: t,
        c: ["self"],
      },
    ],
  };
});
hljs.registerLanguage("diff", function (e) {
  return {
    aliases: ["patch"],
    c: [
      {
        cN: "chunk",
        r: 10,
        v: [
          {
            b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/,
          },
          {
            b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
          },
          {
            b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/,
          },
        ],
      },
      {
        cN: "header",
        v: [
          {
            b: /Index: /,
            e: /$/,
          },
          {
            b: /=====/,
            e: /=====$/,
          },
          {
            b: /^\-\-\-/,
            e: /$/,
          },
          {
            b: /^\*{3} /,
            e: /$/,
          },
          {
            b: /^\+\+\+/,
            e: /$/,
          },
          {
            b: /\*{5}/,
            e: /\*{5}$/,
          },
        ],
      },
      {
        cN: "addition",
        b: "^\\+",
        e: "$",
      },
      {
        cN: "deletion",
        b: "^\\-",
        e: "$",
      },
      {
        cN: "change",
        b: "^\\!",
        e: "$",
      },
    ],
  };
});
hljs.registerLanguage("erlang", function (e) {
  var r = "[a-z'][a-zA-Z0-9_']*",
    c = "(" + r + ":" + r + "|" + r + ")",
    a = {
      keyword:
        "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
      literal: "false true",
    },
    n = e.C("%", "$"),
    i = {
      cN: "number",
      b: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
      r: 0,
    },
    b = {
      b: "fun\\s+" + r + "/\\d+",
    },
    d = {
      b: c + "\\(",
      e: "\\)",
      rB: !0,
      r: 0,
      c: [
        {
          cN: "function_name",
          b: c,
          r: 0,
        },
        {
          b: "\\(",
          e: "\\)",
          eW: !0,
          rE: !0,
          r: 0,
        },
      ],
    },
    o = {
      cN: "tuple",
      b: "{",
      e: "}",
      r: 0,
    },
    t = {
      cN: "variable",
      b: "\\b_([A-Z][A-Za-z0-9_]*)?",
      r: 0,
    },
    l = {
      cN: "variable",
      b: "[A-Z][a-zA-Z0-9_]*",
      r: 0,
    },
    f = {
      b: "#" + e.UIR,
      r: 0,
      rB: !0,
      c: [
        {
          cN: "record_name",
          b: "#" + e.UIR,
          r: 0,
        },
        {
          b: "{",
          e: "}",
          r: 0,
        },
      ],
    },
    s = {
      bK: "fun receive if try case",
      e: "end",
      k: a,
    };
  s.c = [
    n,
    b,
    e.inherit(e.ASM, {
      cN: "",
    }),
    s,
    d,
    e.QSM,
    i,
    o,
    t,
    l,
    f,
  ];
  var u = [n, b, s, d, e.QSM, i, o, t, l, f];
  (d.c[1].c = u), (o.c = u), (f.c[1].c = u);
  var v = {
    cN: "params",
    b: "\\(",
    e: "\\)",
    c: u,
  };
  return {
    aliases: ["erl"],
    k: a,
    i: "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
    c: [
      {
        cN: "function",
        b: "^" + r + "\\s*\\(",
        e: "->",
        rB: !0,
        i: "\\(|#|//|/\\*|\\\\|:|;",
        c: [
          v,
          e.inherit(e.TM, {
            b: r,
          }),
        ],
        starts: {
          e: ";|\\.",
          k: a,
          c: u,
        },
      },
      n,
      {
        cN: "pp",
        b: "^-",
        e: "\\.",
        r: 0,
        eE: !0,
        rB: !0,
        l: "-" + e.IR,
        k: "-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior -spec",
        c: [v],
      },
      i,
      e.QSM,
      f,
      t,
      l,
      o,
      {
        b: /\.$/,
      },
    ],
  };
});
hljs.registerLanguage("stylus", function (t) {
  var e = {
      cN: "variable",
      b: "\\$" + t.IR,
    },
    o = {
      cN: "hexcolor",
      b: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})",
      r: 10,
    },
    i = [
      "charset",
      "css",
      "debug",
      "extend",
      "font-face",
      "for",
      "import",
      "include",
      "media",
      "mixin",
      "page",
      "warn",
      "while",
    ],
    r = [
      "after",
      "before",
      "first-letter",
      "first-line",
      "active",
      "first-child",
      "focus",
      "hover",
      "lang",
      "link",
      "visited",
    ],
    n = [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "mark",
      "menu",
      "nav",
      "object",
      "ol",
      "p",
      "q",
      "quote",
      "samp",
      "section",
      "span",
      "strong",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "ul",
      "var",
      "video",
    ],
    a = "[\\.\\s\\n\\[\\:,]",
    l = [
      "align-content",
      "align-items",
      "align-self",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "auto",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "border",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "clear",
      "clip",
      "clip-path",
      "color",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "content",
      "counter-increment",
      "counter-reset",
      "cursor",
      "direction",
      "display",
      "empty-cells",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "font",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-variant-ligatures",
      "font-weight",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "ime-mode",
      "inherit",
      "initial",
      "justify-content",
      "left",
      "letter-spacing",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-bottom",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "mask",
      "max-height",
      "max-width",
      "min-height",
      "min-width",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "none",
      "normal",
      "object-fit",
      "object-position",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-bottom",
      "padding-left",
      "padding-right",
      "padding-top",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "perspective",
      "perspective-origin",
      "pointer-events",
      "position",
      "quotes",
      "resize",
      "right",
      "tab-size",
      "table-layout",
      "text-align",
      "text-align-last",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-style",
      "text-indent",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-underline-position",
      "top",
      "transform",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "unicode-bidi",
      "vertical-align",
      "visibility",
      "white-space",
      "widows",
      "width",
      "word-break",
      "word-spacing",
      "word-wrap",
      "z-index",
    ],
    d = [
      "\\{",
      "\\}",
      "\\?",
      "(\\bReturn\\b)",
      "(\\bEnd\\b)",
      "(\\bend\\b)",
      ";",
      "#\\s",
      "\\*\\s",
      "===\\s",
      "\\|",
      "%",
    ];
  return {
    aliases: ["styl"],
    cI: !1,
    i: "(" + d.join("|") + ")",
    k: "if else for in",
    c: [
      t.QSM,
      t.ASM,
      t.CLCM,
      t.CBCM,
      o,
      {
        b: "\\.[a-zA-Z][a-zA-Z0-9_-]*" + a,
        rB: !0,
        c: [
          {
            cN: "class",
            b: "\\.[a-zA-Z][a-zA-Z0-9_-]*",
          },
        ],
      },
      {
        b: "\\#[a-zA-Z][a-zA-Z0-9_-]*" + a,
        rB: !0,
        c: [
          {
            cN: "id",
            b: "\\#[a-zA-Z][a-zA-Z0-9_-]*",
          },
        ],
      },
      {
        b: "\\b(" + n.join("|") + ")" + a,
        rB: !0,
        c: [
          {
            cN: "tag",
            b: "\\b[a-zA-Z][a-zA-Z0-9_-]*",
          },
        ],
      },
      {
        cN: "pseudo",
        b: "&?:?:\\b(" + r.join("|") + ")" + a,
      },
      {
        cN: "at_rule",
        b: "@(" + i.join("|") + ")\\b",
      },
      e,
      t.CSSNM,
      t.NM,
      {
        cN: "function",
        b: "\\b[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)",
        i: "[\\n]",
        rB: !0,
        c: [
          {
            cN: "title",
            b: "\\b[a-zA-Z][a-zA-Z0-9_-]*",
          },
          {
            cN: "params",
            b: /\(/,
            e: /\)/,
            c: [o, e, t.ASM, t.CSSNM, t.NM, t.QSM],
          },
        ],
      },
      {
        cN: "attribute",
        b: "\\b(" + l.reverse().join("|") + ")\\b",
      },
    ],
  };
});
hljs.registerLanguage("django", function (e) {
  var t = {
    cN: "filter",
    b: /\|[A-Za-z]+:?/,
    k: "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone",
    c: [
      {
        cN: "argument",
        b: /"/,
        e: /"/,
      },
      {
        cN: "argument",
        b: /'/,
        e: /'/,
      },
    ],
  };
  return {
    aliases: ["jinja"],
    cI: !0,
    sL: "xml",
    subLanguageMode: "continuous",
    c: [
      e.C(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/),
      e.C(/\{#/, /#}/),
      {
        cN: "template_tag",
        b: /\{%/,
        e: /%}/,
        k: "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor in ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup by as ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim",
        c: [t],
      },
      {
        cN: "variable",
        b: /\{\{/,
        e: /}}/,
        c: [t],
      },
    ],
  };
});
hljs.registerLanguage("css", function (e) {
  var c = "[a-zA-Z-][a-zA-Z0-9_-]*",
    a = {
      cN: "function",
      b: c + "\\(",
      rB: !0,
      eE: !0,
      e: "\\(",
    },
    r = {
      cN: "rule",
      b: /[A-Z\_\.\-]+\s*:/,
      rB: !0,
      e: ";",
      eW: !0,
      c: [
        {
          cN: "attribute",
          b: /\S/,
          e: ":",
          eE: !0,
          starts: {
            cN: "value",
            eW: !0,
            eE: !0,
            c: [
              a,
              e.CSSNM,
              e.QSM,
              e.ASM,
              e.CBCM,
              {
                cN: "hexcolor",
                b: "#[0-9A-Fa-f]+",
              },
              {
                cN: "important",
                b: "!important",
              },
            ],
          },
        },
      ],
    };
  return {
    cI: !0,
    i: /[=\/|']/,
    c: [
      e.CBCM,
      r,
      {
        cN: "id",
        b: /\#[A-Za-z0-9_-]+/,
      },
      {
        cN: "class",
        b: /\.[A-Za-z0-9_-]+/,
        r: 0,
      },
      {
        cN: "attr_selector",
        b: /\[/,
        e: /\]/,
        i: "$",
      },
      {
        cN: "pseudo",
        b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/,
      },
      {
        cN: "at_rule",
        b: "@(font-face|page)",
        l: "[a-z-]+",
        k: "font-face page",
      },
      {
        cN: "at_rule",
        b: "@",
        e: "[{;]",
        c: [
          {
            cN: "keyword",
            b: /\S+/,
          },
          {
            b: /\s/,
            eW: !0,
            eE: !0,
            r: 0,
            c: [a, e.ASM, e.QSM, e.CSSNM],
          },
        ],
      },
      {
        cN: "tag",
        b: c,
        r: 0,
      },
      {
        cN: "rules",
        b: "{",
        e: "}",
        i: /\S/,
        r: 0,
        c: [e.CBCM, r],
      },
    ],
  };
});
hljs.registerLanguage("capnproto", function (t) {
  return {
    aliases: ["capnp"],
    k: {
      keyword:
        "struct enum interface union group import using const annotation extends in of on as with from fixed",
      built_in:
        "Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 Text Data AnyPointer AnyStruct Capability List",
      literal: "true false",
    },
    c: [
      t.QSM,
      t.NM,
      t.HCM,
      {
        cN: "shebang",
        b: /@0x[\w\d]{16};/,
        i: /\n/,
      },
      {
        cN: "number",
        b: /@\d+\b/,
      },
      {
        cN: "class",
        bK: "struct enum",
        e: /\{/,
        i: /\n/,
        c: [
          t.inherit(t.TM, {
            starts: {
              eW: !0,
              eE: !0,
            },
          }),
        ],
      },
      {
        cN: "class",
        bK: "interface",
        e: /\{/,
        i: /\n/,
        c: [
          t.inherit(t.TM, {
            starts: {
              eW: !0,
              eE: !0,
            },
          }),
        ],
      },
    ],
  };
});
hljs.registerLanguage("puppet", function (e) {
  var s =
      "augeas computer cron exec file filebucket host interface k5login macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service firewall nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod notify package resources router schedule scheduled_task selboolean selmodule service ssh_authorized_key sshkey stage tidy user vlan yumrepo zfs zone zpool",
    r =
      "alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted",
    a = {
      keyword:
        "and case class default define else elsif false if in import enherits node or true undef unless main settings $string " +
        s,
      literal: r,
      built_in:
        "architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version",
    },
    i = e.C("#", "$"),
    o = {
      cN: "string",
      c: [e.BE],
      v: [
        {
          b: /'/,
          e: /'/,
        },
        {
          b: /"/,
          e: /"/,
        },
      ],
    },
    n = [
      o,
      i,
      {
        cN: "keyword",
        bK: "class",
        e: "$|;",
        i: /=/,
        c: [
          e.inherit(e.TM, {
            b: "(::)?[A-Za-z_]\\w*(::\\w+)*",
          }),
          i,
          o,
        ],
      },
      {
        cN: "keyword",
        b: "([a-zA-Z_(::)]+ *\\{)",
        c: [o, i],
        r: 0,
      },
      {
        cN: "keyword",
        b: "(\\}|\\{)",
        r: 0,
      },
      {
        cN: "function",
        b: "[a-zA-Z_]+\\s*=>",
      },
      {
        cN: "constant",
        b: "(::)?(\\b[A-Z][a-z_]*(::)?)+",
        r: 0,
      },
      {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0,
      },
    ];
  return {
    aliases: ["pp"],
    k: a,
    c: n,
  };
});
hljs.registerLanguage("scala", function (e) {
  var t = {
      cN: "annotation",
      b: "@[A-Za-z]+",
    },
    a = {
      cN: "string",
      b: 'u?r?"""',
      e: '"""',
      r: 10,
    },
    r = {
      cN: "symbol",
      b: "'\\w[\\w\\d_]*(?!')",
    },
    c = {
      cN: "type",
      b: "\\b[A-Z][A-Za-z0-9_]*",
      r: 0,
    },
    i = {
      cN: "title",
      b: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
      r: 0,
    },
    l = {
      cN: "class",
      bK: "class object trait type",
      e: /[:={\[(\n;]/,
      c: [
        {
          cN: "keyword",
          bK: "extends with",
          r: 10,
        },
        i,
      ],
    },
    n = {
      cN: "function",
      bK: "def val",
      e: /[:={\[(\n;]/,
      c: [i],
    };
  return {
    k: {
      literal: "true false null",
      keyword:
        "type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit",
    },
    c: [e.CLCM, e.CBCM, a, e.QSM, r, c, n, l, e.CNM, t],
  };
});
hljs.registerLanguage("rust", function (e) {
  var t = e.inherit(e.CBCM);
  return (
    t.c.push("self"),
    {
      aliases: ["rs"],
      k: {
        keyword:
          "alignof as be box break const continue crate do else enum extern false fn for if impl in let loop match mod mut offsetof once priv proc pub pure ref return self sizeof static struct super trait true type typeof unsafe unsized use virtual while yield int i8 i16 i32 i64 uint u8 u32 u64 float f32 f64 str char bool",
        built_in:
          "assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln!",
      },
      l: e.IR + "!?",
      i: "</",
      c: [
        e.CLCM,
        t,
        e.inherit(e.QSM, {
          i: null,
        }),
        {
          cN: "string",
          b: /r(#*)".*?"\1(?!#)/,
        },
        {
          cN: "string",
          b: /'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/,
        },
        {
          b: /'[a-zA-Z_][a-zA-Z0-9_]*/,
        },
        {
          cN: "number",
          b: /\b(0[xbo][A-Fa-f0-9_]+|\d[\d_]*(\.[0-9_]+)?([eE][+-]?[0-9_]+)?)([uif](8|16|32|64|size))?/,
          r: 0,
        },
        {
          cN: "function",
          bK: "fn",
          e: "(\\(|<)",
          eE: !0,
          c: [e.UTM],
        },
        {
          cN: "preprocessor",
          b: "#\\!?\\[",
          e: "\\]",
        },
        {
          bK: "type",
          e: "(=|<)",
          c: [e.UTM],
          i: "\\S",
        },
        {
          bK: "trait enum",
          e: "({|<)",
          c: [e.UTM],
          i: "\\S",
        },
        {
          b: e.IR + "::",
        },
        {
          b: "->",
        },
      ],
    }
  );
});
hljs.registerLanguage("elixir", function (e) {
  var n = "[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",
    r =
      "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
    b =
      "and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote",
    c = {
      cN: "subst",
      b: "#\\{",
      e: "}",
      l: n,
      k: b,
    },
    a = {
      cN: "string",
      c: [e.BE, c],
      v: [
        {
          b: /'/,
          e: /'/,
        },
        {
          b: /"/,
          e: /"/,
        },
      ],
    },
    i = {
      cN: "function",
      bK: "def defp defmacro",
      e: /\B\b/,
      c: [
        e.inherit(e.TM, {
          b: n,
          endsParent: !0,
        }),
      ],
    },
    s = e.inherit(i, {
      cN: "class",
      bK: "defmodule defrecord",
      e: /\bdo\b|$|;/,
    }),
    l = [
      a,
      e.HCM,
      s,
      i,
      {
        cN: "constant",
        b: "(\\b[A-Z_]\\w*(.)?)+",
        r: 0,
      },
      {
        cN: "symbol",
        b: ":",
        c: [
          a,
          {
            b: r,
          },
        ],
        r: 0,
      },
      {
        cN: "symbol",
        b: n + ":",
        r: 0,
      },
      {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0,
      },
      {
        cN: "variable",
        b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))",
      },
      {
        b: "->",
      },
      {
        b: "(" + e.RSR + ")\\s*",
        c: [
          e.HCM,
          {
            cN: "regexp",
            i: "\\n",
            c: [e.BE, c],
            v: [
              {
                b: "/",
                e: "/[a-z]*",
              },
              {
                b: "%r\\[",
                e: "\\][a-z]*",
              },
            ],
          },
        ],
        r: 0,
      },
    ];
  return (
    (c.c = l),
    {
      l: n,
      k: b,
      c: l,
    }
  );
});
hljs.registerLanguage("dockerfile", function (n) {
  return {
    aliases: ["docker"],
    cI: !0,
    k: {
      built_ins:
        "from maintainer cmd expose add copy entrypoint volume user workdir onbuild run env",
    },
    c: [
      n.HCM,
      {
        k: {
          built_in: "run cmd entrypoint volume add copy workdir onbuild",
        },
        b: /^ *(onbuild +)?(run|cmd|entrypoint|volume|add|copy|workdir) +/,
        starts: {
          e: /[^\\]\n/,
          sL: "bash",
          subLanguageMode: "continuous",
        },
      },
      {
        k: {
          built_in: "from maintainer expose env user onbuild",
        },
        b: /^ *(onbuild +)?(from|maintainer|expose|env|user|onbuild) +/,
        e: /[^\\]\n/,
        c: [n.ASM, n.QSM, n.NM, n.HCM],
      },
    ],
  };
});
hljs.registerLanguage("markdown", function (e) {
  return {
    aliases: ["md", "mkdown", "mkd"],
    c: [
      {
        cN: "header",
        v: [
          {
            b: "^#{1,6}",
            e: "$",
          },
          {
            b: "^.+?\\n[=-]{2,}$",
          },
        ],
      },
      {
        b: "<",
        e: ">",
        sL: "xml",
        r: 0,
      },
      {
        cN: "bullet",
        b: "^([*+-]|(\\d+\\.))\\s+",
      },
      {
        cN: "strong",
        b: "[*_]{2}.+?[*_]{2}",
      },
      {
        cN: "emphasis",
        v: [
          {
            b: "\\*.+?\\*",
          },
          {
            b: "_.+?_",
            r: 0,
          },
        ],
      },
      {
        cN: "blockquote",
        b: "^>\\s+",
        e: "$",
      },
      {
        cN: "code",
        v: [
          {
            b: "`.+?`",
          },
          {
            b: "^( {4}|	)",
            e: "$",
            r: 0,
          },
        ],
      },
      {
        cN: "horizontal_rule",
        b: "^[-\\*]{3,}",
        e: "$",
      },
      {
        b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
        rB: !0,
        c: [
          {
            cN: "link_label",
            b: "\\[",
            e: "\\]",
            eB: !0,
            rE: !0,
            r: 0,
          },
          {
            cN: "link_url",
            b: "\\]\\(",
            e: "\\)",
            eB: !0,
            eE: !0,
          },
          {
            cN: "link_reference",
            b: "\\]\\[",
            e: "\\]",
            eB: !0,
            eE: !0,
          },
        ],
        r: 10,
      },
      {
        b: "^\\[.+\\]:",
        rB: !0,
        c: [
          {
            cN: "link_reference",
            b: "\\[",
            e: "\\]:",
            eB: !0,
            eE: !0,
            starts: {
              cN: "link_url",
              e: "$",
            },
          },
        ],
      },
    ],
  };
});
hljs.registerLanguage("haml", function (s) {
  return {
    cI: !0,
    c: [
      {
        cN: "doctype",
        b: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
        r: 10,
      },
      s.C("^\\s*(!=#|=#|-#|/).*$", !1, {
        r: 0,
      }),
      {
        b: "^\\s*(-|=|!=)(?!#)",
        starts: {
          e: "\\n",
          sL: "ruby",
        },
      },
      {
        cN: "tag",
        b: "^\\s*%",
        c: [
          {
            cN: "title",
            b: "\\w+",
          },
          {
            cN: "value",
            b: "[#\\.]\\w+",
          },
          {
            b: "{\\s*",
            e: "\\s*}",
            eE: !0,
            c: [
              {
                b: ":\\w+\\s*=>",
                e: ",\\s+",
                rB: !0,
                eW: !0,
                c: [
                  {
                    cN: "symbol",
                    b: ":\\w+",
                  },
                  {
                    cN: "string",
                    b: '"',
                    e: '"',
                  },
                  {
                    cN: "string",
                    b: "'",
                    e: "'",
                  },
                  {
                    b: "\\w+",
                    r: 0,
                  },
                ],
              },
            ],
          },
          {
            b: "\\(\\s*",
            e: "\\s*\\)",
            eE: !0,
            c: [
              {
                b: "\\w+\\s*=",
                e: "\\s+",
                rB: !0,
                eW: !0,
                c: [
                  {
                    cN: "attribute",
                    b: "\\w+",
                    r: 0,
                  },
                  {
                    cN: "string",
                    b: '"',
                    e: '"',
                  },
                  {
                    cN: "string",
                    b: "'",
                    e: "'",
                  },
                  {
                    b: "\\w+",
                    r: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        cN: "bullet",
        b: "^\\s*[=~]\\s*",
        r: 0,
      },
      {
        b: "#{",
        starts: {
          e: "}",
          sL: "ruby",
        },
      },
    ],
  };
});
hljs.registerLanguage("ocaml", function (e) {
  return {
    aliases: ["ml"],
    k: {
      keyword:
        "and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",
      built_in:
        "array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",
      literal: "true false",
    },
    i: /\/\/|>>/,
    l: "[a-z_]\\w*!?",
    c: [
      {
        cN: "literal",
        b: "\\[(\\|\\|)?\\]|\\(\\)",
      },
      e.C("\\(\\*", "\\*\\)", {
        c: ["self"],
      }),
      {
        cN: "symbol",
        b: "'[A-Za-z_](?!')[\\w']*",
      },
      {
        cN: "tag",
        b: "`[A-Z][\\w']*",
      },
      {
        cN: "type",
        b: "\\b[A-Z][\\w']*",
        r: 0,
      },
      {
        b: "[a-z_]\\w*'[\\w']*",
      },
      e.inherit(e.ASM, {
        cN: "char",
        r: 0,
      }),
      e.inherit(e.QSM, {
        i: null,
      }),
      {
        cN: "number",
        b: "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
        r: 0,
      },
      {
        b: /[-=]>/,
      },
    ],
  };
});
hljs.registerLanguage("x86asm", function (s) {
  return {
    cI: !0,
    l: "\\.?" + s.IR,
    k: {
      keyword:
        "lock rep repe repz repne repnz xaquire xrelease bnd nobnd aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63",
      literal:
        "ip eip rip al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 cs ds es fs gs ss st st0 st1 st2 st3 st4 st5 st6 st7 mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 k0 k1 k2 k3 k4 k5 k6 k7 bnd0 bnd1 bnd2 bnd3 cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d r0h r1h r2h r3h r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l",
      pseudo:
        "db dw dd dq dt ddq do dy dz resb resw resd resq rest resdq reso resy resz incbin equ times",
      preprocessor:
        "%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep %endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment .nolist byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr __FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ __UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend align alignb sectalign daz nodaz up down zero default option assume public ",
      built_in:
        "bits use16 use32 use64 default section segment absolute extern global common cpu float __utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ __float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ __Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__",
    },
    c: [
      s.C(";", "$", {
        r: 0,
      }),
      {
        cN: "number",
        b: "\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|(0[Xx])?[0-9][0-9_]*\\.?[0-9_]*(?:[pP](?:[+-]?[0-9_]+)?)?)\\b",
        r: 0,
      },
      {
        cN: "number",
        b: "\\$[0-9][0-9A-Fa-f]*",
        r: 0,
      },
      {
        cN: "number",
        b: "\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[HhXx]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b",
      },
      {
        cN: "number",
        b: "\\b(?:0[HhXx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b",
      },
      s.QSM,
      {
        cN: "string",
        b: "'",
        e: "[^\\\\]'",
        r: 0,
      },
      {
        cN: "string",
        b: "`",
        e: "[^\\\\]`",
        r: 0,
      },
      {
        cN: "string",
        b: "\\.[A-Za-z0-9]+",
        r: 0,
      },
      {
        cN: "label",
        b: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
        r: 0,
      },
      {
        cN: "label",
        b: "^\\s*%%[A-Za-z0-9_$#@~.?]*:",
        r: 0,
      },
      {
        cN: "argument",
        b: "%[0-9]+",
        r: 0,
      },
      {
        cN: "built_in",
        b: "%!S+",
        r: 0,
      },
    ],
  };
});
hljs.registerLanguage("ruby", function (e) {
  var c =
      "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
    r =
      "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
    b = {
      cN: "yardoctag",
      b: "@[A-Za-z]+",
    },
    a = {
      cN: "value",
      b: "#<",
      e: ">",
    },
    n = [
      e.C("#", "$", {
        c: [b],
      }),
      e.C("^\\=begin", "^\\=end", {
        c: [b],
        r: 10,
      }),
      e.C("^__END__", "\\n$"),
    ],
    s = {
      cN: "subst",
      b: "#\\{",
      e: "}",
      k: r,
    },
    t = {
      cN: "string",
      c: [e.BE, s],
      v: [
        {
          b: /'/,
          e: /'/,
        },
        {
          b: /"/,
          e: /"/,
        },
        {
          b: /`/,
          e: /`/,
        },
        {
          b: "%[qQwWx]?\\(",
          e: "\\)",
        },
        {
          b: "%[qQwWx]?\\[",
          e: "\\]",
        },
        {
          b: "%[qQwWx]?{",
          e: "}",
        },
        {
          b: "%[qQwWx]?<",
          e: ">",
        },
        {
          b: "%[qQwWx]?/",
          e: "/",
        },
        {
          b: "%[qQwWx]?%",
          e: "%",
        },
        {
          b: "%[qQwWx]?-",
          e: "-",
        },
        {
          b: "%[qQwWx]?\\|",
          e: "\\|",
        },
        {
          b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/,
        },
      ],
    },
    i = {
      cN: "params",
      b: "\\(",
      e: "\\)",
      k: r,
    },
    d = [
      t,
      a,
      {
        cN: "class",
        bK: "class module",
        e: "$|;",
        i: /=/,
        c: [
          e.inherit(e.TM, {
            b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",
          }),
          {
            cN: "inheritance",
            b: "<\\s*",
            c: [
              {
                cN: "parent",
                b: "(" + e.IR + "::)?" + e.IR,
              },
            ],
          },
        ].concat(n),
      },
      {
        cN: "function",
        bK: "def",
        e: " |$|;",
        r: 0,
        c: [
          e.inherit(e.TM, {
            b: c,
          }),
          i,
        ].concat(n),
      },
      {
        cN: "constant",
        b: "(::)?(\\b[A-Z]\\w*(::)?)+",
        r: 0,
      },
      {
        cN: "symbol",
        b: e.UIR + "(\\!|\\?)?:",
        r: 0,
      },
      {
        cN: "symbol",
        b: ":",
        c: [
          t,
          {
            b: c,
          },
        ],
        r: 0,
      },
      {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0,
      },
      {
        cN: "variable",
        b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))",
      },
      {
        b: "(" + e.RSR + ")\\s*",
        c: [
          a,
          {
            cN: "regexp",
            c: [e.BE, s],
            i: /\n/,
            v: [
              {
                b: "/",
                e: "/[a-z]*",
              },
              {
                b: "%r{",
                e: "}[a-z]*",
              },
              {
                b: "%r\\(",
                e: "\\)[a-z]*",
              },
              {
                b: "%r!",
                e: "![a-z]*",
              },
              {
                b: "%r\\[",
                e: "\\][a-z]*",
              },
            ],
          },
        ].concat(n),
        r: 0,
      },
    ].concat(n);
  (s.c = d), (i.c = d);
  var o = "[>?]>",
    l = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
    u = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
    N = [
      {
        b: /^\s*=>/,
        cN: "status",
        starts: {
          e: "$",
          c: d,
        },
      },
      {
        cN: "prompt",
        b: "^(" + o + "|" + l + "|" + u + ")",
        starts: {
          e: "$",
          c: d,
        },
      },
    ];
  return {
    aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
    k: r,
    c: n.concat(N).concat(d),
  };
});
hljs.registerLanguage("typescript", function (e) {
  return {
    aliases: ["ts"],
    k: {
      keyword:
        "in if for while finally var new function|0 do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private get set super interface extendsstatic constructor implements enum export import declare type protected",
      literal: "true false null undefined NaN Infinity",
      built_in:
        "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void",
    },
    c: [
      {
        cN: "pi",
        b: /^\s*('|")use strict('|")/,
        r: 0,
      },
      e.ASM,
      e.QSM,
      e.CLCM,
      e.CBCM,
      e.CNM,
      {
        b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
        k: "return throw case",
        c: [
          e.CLCM,
          e.CBCM,
          e.RM,
          {
            b: /</,
            e: />;/,
            r: 0,
            sL: "xml",
          },
        ],
        r: 0,
      },
      {
        cN: "function",
        bK: "function",
        e: /\{/,
        eE: !0,
        c: [
          e.inherit(e.TM, {
            b: /[A-Za-z$_][0-9A-Za-z$_]*/,
          }),
          {
            cN: "params",
            b: /\(/,
            e: /\)/,
            c: [e.CLCM, e.CBCM],
            i: /["'\(]/,
          },
        ],
        i: /\[|%/,
        r: 0,
      },
      {
        cN: "constructor",
        bK: "constructor",
        e: /\{/,
        eE: !0,
        r: 10,
      },
      {
        cN: "module",
        bK: "module",
        e: /\{/,
        eE: !0,
      },
      {
        cN: "interface",
        bK: "interface",
        e: /\{/,
        eE: !0,
      },
      {
        b: /\$[(.]/,
      },
      {
        b: "\\." + e.IR,
        r: 0,
      },
    ],
  };
});
hljs.registerLanguage("clojure-repl", function (e) {
  return {
    c: [
      {
        cN: "prompt",
        b: /^([\w.-]+|\s*#_)=>/,
        starts: {
          e: /$/,
          sL: "clojure",
          subLanguageMode: "continuous",
        },
      },
    ],
  };
});
hljs.registerLanguage("handlebars", function (e) {
  var a =
    "each in with if else unless bindattr action collection debugger log outlet template unbound view yield";
  return {
    aliases: ["hbs", "html.hbs", "html.handlebars"],
    cI: !0,
    sL: "xml",
    subLanguageMode: "continuous",
    c: [
      {
        cN: "expression",
        b: "{{",
        e: "}}",
        c: [
          {
            cN: "begin-block",
            b: "#[a-zA-Z- .]+",
            k: a,
          },
          {
            cN: "string",
            b: '"',
            e: '"',
          },
          {
            cN: "end-block",
            b: "\\/[a-zA-Z- .]+",
            k: a,
          },
          {
            cN: "variable",
            b: "[a-zA-Z-.]+",
            k: a,
          },
        ],
      },
    ],
  };
});
hljs.registerLanguage("julia", function (r) {
  var e = {
      keyword:
        "in abstract baremodule begin bitstype break catch ccall const continue do else elseif end export finally for function global if immutable import importall let local macro module quote return try type typealias using while",
      literal:
        "true false ANY ARGS CPU_CORES C_NULL DL_LOAD_PATH DevNull ENDIAN_BOM ENV I|0 Inf Inf16 Inf32 InsertionSort JULIA_HOME LOAD_PATH MS_ASYNC MS_INVALIDATE MS_SYNC MergeSort NaN NaN16 NaN32 OS_NAME QuickSort RTLD_DEEPBIND RTLD_FIRST RTLD_GLOBAL RTLD_LAZY RTLD_LOCAL RTLD_NODELETE RTLD_NOLOAD RTLD_NOW RoundDown RoundFromZero RoundNearest RoundToZero RoundUp STDERR STDIN STDOUT VERSION WORD_SIZE catalan cglobal e eu eulergamma golden im nothing pi γ π φ",
      built_in:
        "ASCIIString AbstractArray AbstractRNG AbstractSparseArray Any ArgumentError Array Associative Base64Pipe Bidiagonal BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError Box CFILE Cchar Cdouble Cfloat Char CharString Cint Clong Clonglong ClusterManager Cmd Coff_t Colon Complex Complex128 Complex32 Complex64 Condition Cptrdiff_t Cshort Csize_t Cssize_t Cuchar Cuint Culong Culonglong Cushort Cwchar_t DArray DataType DenseArray Diagonal Dict DimensionMismatch DirectIndexString Display DivideError DomainError EOFError EachLine Enumerate ErrorException Exception Expr Factorization FileMonitor FileOffset Filter Float16 Float32 Float64 FloatRange FloatingPoint Function GetfieldNode GotoNode Hermitian IO IOBuffer IOStream IPv4 IPv6 InexactError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException IntrinsicFunction KeyError LabelNode LambdaStaticData LineNumberNode LoadError LocalProcess MIME MathConst MemoryError MersenneTwister Method MethodError MethodTable Module NTuple NewvarNode Nothing Number ObjectIdDict OrdinalRange OverflowError ParseError PollingFileWatcher ProcessExitedException ProcessGroup Ptr QuoteNode Range Range1 Ranges Rational RawFD Real Regex RegexMatch RemoteRef RepString RevString RopeString RoundingMode Set SharedArray Signed SparseMatrixCSC StackOverflowError Stat StatStruct StepRange String SubArray SubString SymTridiagonal Symbol SymbolNode Symmetric SystemError Task TextDisplay Timer TmStruct TopNode Triangular Tridiagonal Type TypeConstructor TypeError TypeName TypeVar UTF16String UTF32String UTF8String UdpSocket Uint Uint128 Uint16 Uint32 Uint64 Uint8 UndefRefError UndefVarError UniformScaling UnionType UnitRange Unsigned Vararg VersionNumber WString WeakKeyDict WeakRef Woodbury Zip",
    },
    t = "[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",
    o = {
      l: t,
      k: e,
    },
    n = {
      cN: "type-annotation",
      b: /::/,
    },
    a = {
      cN: "subtype",
      b: /<:/,
    },
    i = {
      cN: "number",
      b: /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
      r: 0,
    },
    l = {
      cN: "char",
      b: /'(.|\\[xXuU][a-zA-Z0-9]+)'/,
    },
    c = {
      cN: "subst",
      b: /\$\(/,
      e: /\)/,
      k: e,
    },
    u = {
      cN: "variable",
      b: "\\$" + t,
    },
    d = {
      cN: "string",
      c: [r.BE, c, u],
      v: [
        {
          b: /\w*"/,
          e: /"\w*/,
        },
        {
          b: /\w*"""/,
          e: /"""\w*/,
        },
      ],
    },
    g = {
      cN: "string",
      c: [r.BE, c, u],
      b: "`",
      e: "`",
    },
    s = {
      cN: "macrocall",
      b: "@" + t,
    },
    S = {
      cN: "comment",
      v: [
        {
          b: "#=",
          e: "=#",
          r: 10,
        },
        {
          b: "#",
          e: "$",
        },
      ],
    };
  return (o.c = [i, l, n, a, d, g, s, S, r.HCM]), (c.c = o.c), o;
});
hljs.registerLanguage("objectivec", function (e) {
  var t = {
      cN: "built_in",
      b: "(AV|CA|CF|CG|CI|MK|MP|NS|UI)\\w+",
    },
    i = {
      keyword:
        "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
      literal: "false true FALSE TRUE nil YES NO NULL",
      built_in:
        "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once",
    },
    o = /[a-zA-Z@][a-zA-Z0-9_]*/,
    n = "@interface @class @protocol @implementation";
  return {
    aliases: ["m", "mm", "objc", "obj-c"],
    k: i,
    l: o,
    i: "</",
    c: [
      t,
      e.CLCM,
      e.CBCM,
      e.CNM,
      e.QSM,
      {
        cN: "string",
        v: [
          {
            b: '@"',
            e: '"',
            i: "\\n",
            c: [e.BE],
          },
          {
            b: "'",
            e: "[^\\\\]'",
            i: "[^\\\\][^']",
          },
        ],
      },
      {
        cN: "preprocessor",
        b: "#",
        e: "$",
        c: [
          {
            cN: "title",
            v: [
              {
                b: '"',
                e: '"',
              },
              {
                b: "<",
                e: ">",
              },
            ],
          },
        ],
      },
      {
        cN: "class",
        b: "(" + n.split(" ").join("|") + ")\\b",
        e: "({|$)",
        eE: !0,
        k: n,
        l: o,
        c: [e.UTM],
      },
      {
        cN: "variable",
        b: "\\." + e.UIR,
        r: 0,
      },
    ],
  };
});
