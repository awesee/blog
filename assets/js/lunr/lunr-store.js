var store = [{
        "title": "Abbreviations",
        "excerpt":"计算机常见术语及缩写                  缩写       全称                       ACK       Acknowledge                 ARP       Address Resolution Protocol                 bash       Bourne Again Shell                 CC       Carbon Copy                 CR       Carriage Return                 CSMA/CD       Carrier Sense Multiple Access with Collision Detection                 DIY       Do It Yourself                 ICMP       Internet Control Message Protocol                 IETF       Internet Engineering Task Force                 IIRC       If I Recall Correctly                 IP       Internet Protocol                 KISS       Keep it Simple and Stupid                 LF       Line Feed                 LGTM       Looks Good To Me                 MAC       Media Access Control                 MTU       Maximum Transmission Unit                 NACK/NAK       Negative acknowledgement                 NAT       Network Address Transfer                 PKCS       Public Key Cryptography Standards                 POSI       Portable Operating System Interface                 PR       Pull Request                 PTAL       Please Take A Look                 RFC       Request For Comments                 SGTM       Sounds Good To Me                 SYN       Synchronous                 TBD       To Be Done(or Defined/Discussed/Decided/Determined)                 TBR       To Be Reviewed                 TL;DR       Too Long; Didn’t Read                 TTL       Time To Live                 UDP       User Datagram Protocol                 WIP       Work In Progress          ","categories": ["Guide"],
        "tags": ["Tool"],
        "url": "/guide-abbreviations/",
        "teaser": null
      },{
        "title": "两数之和",
        "excerpt":"1. 两数之和 (Easy)   给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。   你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。   你可以按任意顺序返回答案。       示例 1：    输入：nums = [2,7,11,15], target = 9 输出：[0,1] 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。   示例 2：    输入：nums = [3,2,4], target = 6 输出：[1,2]   示例 3：    输入：nums = [3,3], target = 6 输出：[0,1]       提示：    \t2 &lt;= nums.length &lt;= 104 \t-109 &lt;= nums[i] &lt;= 109 \t-109 &lt;= target &lt;= 109 \t只会存在一个有效答案   进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？   相关话题  [数组]   [哈希表]   相似题目     三数之和 (Medium)   四数之和 (Medium)   两数之和 II - 输入有序数组 (Easy)   两数之和 III - 数据结构设计 (Easy)   和为 K 的子数组 (Medium)   两数之和 IV - 输入 BST (Easy)   小于 K 的两数之和 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table"],
        "url": "/problems/two-sum/",
        "teaser": null
      },{
        "title": "两数相加",
        "excerpt":"2. 两数相加 (Medium)   给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。   请你将两个数相加，并以相同形式返回一个表示和的链表。   你可以假设除了数字 0 之外，这两个数都不会以 0 开头。       示例 1：     输入：l1 = [2,4,3], l2 = [5,6,4] 输出：[7,0,8] 解释：342 + 465 = 807.   示例 2：    输入：l1 = [0], l2 = [0] 输出：[0]   示例 3：    输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] 输出：[8,9,9,9,0,0,0,1]       提示：    \t每个链表中的节点数在范围 [1, 100] 内 \t0 &lt;= Node.val &lt;= 9 \t题目数据保证列表表示的数字不含前导零   相关话题  [递归]   [链表]   [数学]   相似题目     字符串相乘 (Medium)   二进制求和 (Easy)   两整数之和 (Medium)   字符串相加 (Easy)   两数相加 II (Medium)   数组形式的整数加法 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Recursion","Linked List","Math"],
        "url": "/problems/add-two-numbers/",
        "teaser": null
      },{
        "title": "无重复字符的最长子串",
        "excerpt":"3. 无重复字符的最长子串 (Medium)   给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。       示例 1:    输入: s = \"abcabcbb\" 输出: 3  解释: 因为无重复字符的最长子串是 \"abc\"，所以其长度为 3。   示例 2:    输入: s = \"bbbbb\" 输出: 1 解释: 因为无重复字符的最长子串是 \"b\"，所以其长度为 1。   示例 3:    输入: s = \"pwwkew\" 输出: 3 解释: 因为无重复字符的最长子串是 \"wke\"，所以其长度为 3。      请注意，你的答案必须是 子串 的长度，\"pwke\" 是一个子序列，不是子串。   示例 4:    输入: s = \"\" 输出: 0       提示：    \t0 &lt;= s.length &lt;= 5 * 104 \ts 由英文字母、数字、符号和空格组成   相关话题  [哈希表]   [字符串]   [滑动窗口]   相似题目     至多包含两个不同字符的最长子串 (Medium)   至多包含 K 个不同字符的最长子串 (Medium)   K 个不同整数的子数组 (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","String","Sliding Window"],
        "url": "/problems/longest-substring-without-repeating-characters/",
        "teaser": null
      },{
        "title": "寻找两个正序数组的中位数",
        "excerpt":"4. 寻找两个正序数组的中位数 (Hard)   给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。       示例 1：    输入：nums1 = [1,3], nums2 = [2] 输出：2.00000 解释：合并数组 = [1,2,3] ，中位数 2   示例 2：    输入：nums1 = [1,2], nums2 = [3,4] 输出：2.50000 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5   示例 3：    输入：nums1 = [0,0], nums2 = [0,0] 输出：0.00000   示例 4：    输入：nums1 = [], nums2 = [1] 输出：1.00000   示例 5：    输入：nums1 = [2], nums2 = [] 输出：2.00000       提示：    \tnums1.length == m \tnums2.length == n \t0 &lt;= m &lt;= 1000 \t0 &lt;= n &lt;= 1000 \t1 &lt;= m + n &lt;= 2000 \t-106 &lt;= nums1[i], nums2[i] &lt;= 106       进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？   相关话题  [数组]   [二分查找]   [分治]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Binary Search","Divide and Conquer"],
        "url": "/problems/median-of-two-sorted-arrays/",
        "teaser": null
      },{
        "title": "最长回文子串",
        "excerpt":"5. 最长回文子串 (Medium)   给你一个字符串 s，找到 s 中最长的回文子串。       示例 1：    输入：s = \"babad\" 输出：\"bab\" 解释：\"aba\" 同样是符合题意的答案。   示例 2：    输入：s = \"cbbd\" 输出：\"bb\"   示例 3：    输入：s = \"a\" 输出：\"a\"   示例 4：    输入：s = \"ac\" 输出：\"a\"       提示：    \t1 &lt;= s.length &lt;= 1000 \ts 仅由数字和英文字母（大写和/或小写）组成   相关话题  [字符串]   [动态规划]   相似题目     最短回文串 (Hard)   回文排列 (Easy)   回文对 (Hard)   最长回文子序列 (Medium)   回文子串 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["String","Dynamic Programming"],
        "url": "/problems/longest-palindromic-substring/",
        "teaser": null
      },{
        "title": "Z 字形变换",
        "excerpt":"6. Z 字形变换 (Medium)   将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。   比如输入字符串为 \"PAYPALISHIRING\" 行数为 3 时，排列如下：    P   A   H   N A P L S I I G Y   I   R  之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：\"PAHNAPLSIIGYIR\"。   请你实现这个将字符串进行指定行数变换的函数：    string convert(string s, int numRows);      示例 1：    输入：s = \"PAYPALISHIRING\", numRows = 3 输出：\"PAHNAPLSIIGYIR\"  示例 2：    输入：s = \"PAYPALISHIRING\", numRows = 4 输出：\"PINALSIGYAHRPI\" 解释： P     I    N A   L S  I G Y A   H R P     I   示例 3：    输入：s = \"A\", numRows = 1 输出：\"A\"       提示：    \t1 &lt;= s.length &lt;= 1000 \ts 由英文字母（小写和大写）、',' 和 '.' 组成 \t1 &lt;= numRows &lt;= 1000   相关话题  [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/zigzag-conversion/",
        "teaser": null
      },{
        "title": "整数反转",
        "excerpt":"7. 整数反转 (Easy)   给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。   如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。  假设环境不允许存储 64 位整数（有符号或无符号）。       示例 1：    输入：x = 123 输出：321   示例 2：    输入：x = -123 输出：-321   示例 3：    输入：x = 120 输出：21   示例 4：    输入：x = 0 输出：0       提示：    \t-231 &lt;= x &lt;= 231 - 1   相关话题  [数学]   相似题目     字符串转换整数 (atoi) (Medium)   颠倒二进制位 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Math"],
        "url": "/problems/reverse-integer/",
        "teaser": null
      },{
        "title": "字符串转换整数 (atoi)",
        "excerpt":"8. 字符串转换整数 (atoi) (Medium)   请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。   函数 myAtoi(string s) 的算法如下：    \t读入字符串并丢弃无用的前导空格 \t检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。 \t读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。 \t将前面步骤读入的这些数字转换为整数（即，\"123\" -&gt; 123， \"0032\" -&gt; 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。 \t如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。 \t返回整数作为最终结果。   注意：    \t本题中的空白字符只包括空格字符 ' ' 。 \t除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。       示例 1：    输入：s = \"42\" 输出：42 解释：加粗的字符串为已经读入的字符，插入符号是当前读取的字符。 第 1 步：\"42\"（当前没有读入字符，因为没有前导空格）          ^ 第 2 步：\"42\"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）          ^ 第 3 步：\"42\"（读入 \"42\"）            ^ 解析得到整数 42 。 由于 \"42\" 在范围 [-231, 231 - 1] 内，最终结果为 42 。  示例 2：    输入：s = \"   -42\" 输出：-42 解释： 第 1 步：\"   -42\"（读入前导空格，但忽视掉）             ^ 第 2 步：\"   -42\"（读入 '-' 字符，所以结果应该是负数）              ^ 第 3 步：\"   -42\"（读入 \"42\"）                ^ 解析得到整数 -42 。 由于 \"-42\" 在范围 [-231, 231 - 1] 内，最终结果为 -42 。   示例 3：    输入：s = \"4193 with words\" 输出：4193 解释： 第 1 步：\"4193 with words\"（当前没有读入字符，因为没有前导空格）          ^ 第 2 步：\"4193 with words\"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）          ^ 第 3 步：\"4193 with words\"（读入 \"4193\"；由于下一个字符不是一个数字，所以读入停止）              ^ 解析得到整数 4193 。 由于 \"4193\" 在范围 [-231, 231 - 1] 内，最终结果为 4193 。   示例 4：    输入：s = \"words and 987\" 输出：0 解释： 第 1 步：\"words and 987\"（当前没有读入字符，因为没有前导空格）          ^ 第 2 步：\"words and 987\"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）          ^ 第 3 步：\"words and 987\"（由于当前字符 'w' 不是一个数字，所以读入停止）          ^ 解析得到整数 0 ，因为没有读入任何数字。 由于 0 在范围 [-231, 231 - 1] 内，最终结果为 0 。  示例 5：    输入：s = \"-91283472332\" 输出：-2147483648 解释： 第 1 步：\"-91283472332\"（当前没有读入字符，因为没有前导空格）          ^ 第 2 步：\"-91283472332\"（读入 '-' 字符，所以结果应该是负数）           ^ 第 3 步：\"-91283472332\"（读入 \"91283472332\"）                      ^ 解析得到整数 -91283472332 。 由于 -91283472332 小于范围 [-231, 231 - 1] 的下界，最终结果被截断为 -231 = -2147483648 。      提示：    \t0 &lt;= s.length &lt;= 200 \ts 由英文字母（大写和小写）、数字（0-9）、' '、'+'、'-' 和 '.' 组成   相关话题  [字符串]   相似题目     整数反转 (Easy)   有效数字 (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/string-to-integer-atoi/",
        "teaser": null
      },{
        "title": "回文数",
        "excerpt":"9. 回文数 (Easy)   给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。   回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。       示例 1：    输入：x = 121 输出：true   示例 2：    输入：x = -121 输出：false 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。   示例 3：    输入：x = 10 输出：false 解释：从右向左读, 为 01 。因此它不是一个回文数。   示例 4：    输入：x = -101 输出：false       提示：    \t-231 &lt;= x &lt;= 231 - 1       进阶：你能不将整数转为字符串来解决这个问题吗？   相关话题  [数学]   相似题目     回文链表 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Math"],
        "url": "/problems/palindrome-number/",
        "teaser": null
      },{
        "title": "正则表达式匹配",
        "excerpt":"10. 正则表达式匹配 (Hard)   给你一个字符串&nbsp;s&nbsp;和一个字符规律&nbsp;p，请你来实现一个支持 '.'&nbsp;和&nbsp;'*'&nbsp;的正则表达式匹配。    \t'.' 匹配任意单个字符 \t'*' 匹配零个或多个前面的那一个元素   所谓匹配，是要涵盖&nbsp;整个&nbsp;字符串&nbsp;s的，而不是部分字符串。      示例 1：    输入：s = \"aa\" p = \"a\" 输出：false 解释：\"a\" 无法匹配 \"aa\" 整个字符串。   示例 2:    输入：s = \"aa\" p = \"a*\" 输出：true 解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 \"aa\" 可被视为 'a' 重复了一次。   示例&nbsp;3：    输入：s = \"ab\" p = \".*\" 输出：true 解释：\".*\" 表示可匹配零个或多个（'*'）任意字符（'.'）。   示例 4：    输入：s = \"aab\" p = \"c*a*b\" 输出：true 解释：因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 \"aab\"。   示例 5：    输入：s = \"mississippi\" p = \"mis*is*p*.\" 输出：false  &nbsp;   提示：    \t1 &lt;= s.length&nbsp;&lt;= 20 \t1 &lt;= p.length&nbsp;&lt;= 30 \ts&nbsp;可能为空，且只包含从&nbsp;a-z&nbsp;的小写字母。 \tp&nbsp;可能为空，且只包含从&nbsp;a-z&nbsp;的小写字母，以及字符&nbsp;.&nbsp;和&nbsp;*。 \t保证每次出现字符&nbsp;* 时，前面都匹配到有效的字符   相关话题  [递归]   [字符串]   [动态规划]   相似题目     通配符匹配 (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["Recursion","String","Dynamic Programming"],
        "url": "/problems/regular-expression-matching/",
        "teaser": null
      },{
        "title": "盛最多水的容器",
        "excerpt":"11. 盛最多水的容器 (Medium)   给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。   说明：你不能倾斜容器。       示例 1：       输入：[1,8,6,2,5,4,8,3,7] 输出：49  解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。  示例 2：    输入：height = [1,1] 输出：1   示例 3：    输入：height = [4,3,2,1,4] 输出：16   示例 4：    输入：height = [1,2,1] 输出：2       提示：    \tn = height.length \t2 &lt;= n &lt;= 3 * 104 \t0 &lt;= height[i] &lt;= 3 * 104   相关话题  [贪心]   [数组]   [双指针]   相似题目     接雨水 (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["Greedy","Array","Two Pointers"],
        "url": "/problems/container-with-most-water/",
        "teaser": null
      },{
        "title": "整数转罗马数字",
        "excerpt":"12. 整数转罗马数字 (Medium)   罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。    字符          数值 I             1 V             5 X             10 L             50 C             100 D             500 M             1000  例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。   通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：    \tI 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。 \tX 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。  \tC 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。   给你一个整数，将其转为罗马数字。       示例 1:    输入: num = 3 输出: \"III\"  示例 2:    输入: num = 4 输出: \"IV\"  示例 3:    输入: num = 9 输出: \"IX\"  示例 4:    输入: num = 58 输出: \"LVIII\" 解释: L = 50, V = 5, III = 3.   示例 5:    输入: num = 1994 输出: \"MCMXCIV\" 解释: M = 1000, CM = 900, XC = 90, IV = 4.      提示：    \t1 &lt;= num &lt;= 3999   相关话题  [哈希表]   [数学]   [字符串]   相似题目     罗马数字转整数 (Easy)   整数转换英文表示 (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","Math","String"],
        "url": "/problems/integer-to-roman/",
        "teaser": null
      },{
        "title": "罗马数字转整数",
        "excerpt":"13. 罗马数字转整数 (Easy)   罗马数字包含以下七种字符:&nbsp;I，&nbsp;V，&nbsp;X，&nbsp;L，C，D&nbsp;和&nbsp;M。    字符          数值 I             1 V             5 X             10 L             50 C             100 D             500 M             1000  例如， 罗马数字 2 写做&nbsp;II&nbsp;，即为两个并列的 1 。12 写做&nbsp;XII&nbsp;，即为&nbsp;X&nbsp;+&nbsp;II&nbsp;。 27 写做&nbsp;&nbsp;XXVII, 即为&nbsp;XX&nbsp;+&nbsp;V&nbsp;+&nbsp;II&nbsp;。   通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做&nbsp;IIII，而是&nbsp;IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为&nbsp;IX。这个特殊的规则只适用于以下六种情况：    \tI&nbsp;可以放在&nbsp;V&nbsp;(5) 和&nbsp;X&nbsp;(10) 的左边，来表示 4 和 9。 \tX&nbsp;可以放在&nbsp;L&nbsp;(50) 和&nbsp;C&nbsp;(100) 的左边，来表示 40 和&nbsp;90。&nbsp; \tC&nbsp;可以放在&nbsp;D&nbsp;(500) 和&nbsp;M&nbsp;(1000) 的左边，来表示&nbsp;400 和&nbsp;900。   给定一个罗马数字，将其转换成整数。   &nbsp;   示例&nbsp;1:    输入:&nbsp;s = \"III\" 输出: 3  示例&nbsp;2:    输入:&nbsp;s = \"IV\" 输出: 4  示例&nbsp;3:    输入:&nbsp;s = \"IX\" 输出: 9  示例&nbsp;4:    输入:&nbsp;s = \"LVIII\" 输出: 58 解释: L = 50, V= 5, III = 3.   示例&nbsp;5:    输入:&nbsp;s = \"MCMXCIV\" 输出: 1994 解释: M = 1000, CM = 900, XC = 90, IV = 4.  &nbsp;   提示：    \t1 &lt;= s.length &lt;= 15 \ts 仅含字符 ('I', 'V', 'X', 'L', 'C', 'D', 'M') \t题目数据保证 s 是一个有效的罗马数字，且表示整数在范围 [1, 3999] 内 \t题目所给测试用例皆符合罗马数字书写规则，不会出现跨位等情况。 \tIL 和 IM 这样的例子并不符合题目要求，49 应该写作 XLIX，999 应该写作 CMXCIX 。 \t关于罗马数字的详尽书写规则，可以参考 罗马数字 - Mathematics 。   相关话题  [哈希表]   [数学]   [字符串]   相似题目     整数转罗马数字 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","Math","String"],
        "url": "/problems/roman-to-integer/",
        "teaser": null
      },{
        "title": "最长公共前缀",
        "excerpt":"14. 最长公共前缀 (Easy)   编写一个函数来查找字符串数组中的最长公共前缀。   如果不存在公共前缀，返回空字符串 \"\"。       示例 1：    输入：strs = [\"flower\",\"flow\",\"flight\"] 输出：\"fl\"   示例 2：    输入：strs = [\"dog\",\"racecar\",\"car\"] 输出：\"\" 解释：输入不存在公共前缀。      提示：    \t0 &lt;= strs.length &lt;= 200 \t0 &lt;= strs[i].length &lt;= 200 \tstrs[i] 仅由小写英文字母组成   相关话题  [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/longest-common-prefix/",
        "teaser": null
      },{
        "title": "三数之和",
        "excerpt":"15. 三数之和 (Medium)   给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。   注意：答案中不可以包含重复的三元组。       示例 1：    输入：nums = [-1,0,1,2,-1,-4] 输出：[[-1,-1,2],[-1,0,1]]   示例 2：    输入：nums = [] 输出：[]   示例 3：    输入：nums = [0] 输出：[]       提示：    \t0 &lt;= nums.length &lt;= 3000 \t-105 &lt;= nums[i] &lt;= 105   相关话题  [数组]   [双指针]   [排序]   相似题目     两数之和 (Easy)   最接近的三数之和 (Medium)   四数之和 (Medium)   较小的三数之和 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Two Pointers","Sorting"],
        "url": "/problems/3sum/",
        "teaser": null
      },{
        "title": "最接近的三数之和",
        "excerpt":"16. 最接近的三数之和 (Medium)   给定一个包括&nbsp;n 个整数的数组&nbsp;nums&nbsp;和 一个目标值&nbsp;target。找出&nbsp;nums&nbsp;中的三个整数，使得它们的和与&nbsp;target&nbsp;最接近。返回这三个数的和。假定每组输入只存在唯一答案。   &nbsp;   示例：   输入：nums = [-1,2,1,-4], target = 1 输出：2 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。   &nbsp;   提示：    \t3 &lt;= nums.length &lt;= 10^3 \t-10^3&nbsp;&lt;= nums[i]&nbsp;&lt;= 10^3 \t-10^4&nbsp;&lt;= target&nbsp;&lt;= 10^4   相关话题  [数组]   [双指针]   [排序]   相似题目     三数之和 (Medium)   较小的三数之和 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Two Pointers","Sorting"],
        "url": "/problems/3sum-closest/",
        "teaser": null
      },{
        "title": "电话号码的字母组合",
        "excerpt":"17. 电话号码的字母组合 (Medium)   给定一个仅包含数字&nbsp;2-9&nbsp;的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。   给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。      &nbsp;   示例 1：    输入：digits = \"23\" 输出：[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]   示例 2：    输入：digits = \"\" 输出：[]   示例 3：    输入：digits = \"2\" 输出：[\"a\",\"b\",\"c\"]   &nbsp;   提示：    \t0 &lt;= digits.length &lt;= 4 \tdigits[i] 是范围 ['2', '9'] 的一个数字。   相关话题  [哈希表]   [字符串]   [回溯]   相似题目     括号生成 (Medium)   组合总和 (Medium)   二进制手表 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","String","Backtracking"],
        "url": "/problems/letter-combinations-of-a-phone-number/",
        "teaser": null
      },{
        "title": "四数之和",
        "excerpt":"18. 四数之和 (Medium)   给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。   注意：答案中不可以包含重复的四元组。       示例 1：    输入：nums = [1,0,-1,0,-2,2], target = 0 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]   示例 2：    输入：nums = [], target = 0 输出：[]       提示：    \t0 &lt;= nums.length &lt;= 200 \t-109 &lt;= nums[i] &lt;= 109 \t-109 &lt;= target &lt;= 109   相关话题  [数组]   [双指针]   [排序]   相似题目     两数之和 (Easy)   三数之和 (Medium)   四数相加 II (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Two Pointers","Sorting"],
        "url": "/problems/4sum/",
        "teaser": null
      },{
        "title": "删除链表的倒数第 N 个结点",
        "excerpt":"19. 删除链表的倒数第 N 个结点 (Medium)   给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。   进阶：你能尝试使用一趟扫描实现吗？       示例 1：     输入：head = [1,2,3,4,5], n = 2 输出：[1,2,3,5]   示例 2：    输入：head = [1], n = 1 输出：[]   示例 3：    输入：head = [1,2], n = 1 输出：[1]       提示：    \t链表中结点的数目为 sz \t1 &lt;= sz &lt;= 30 \t0 &lt;= Node.val &lt;= 100 \t1 &lt;= n &lt;= sz   相关话题  [链表]   [双指针]     解法  ","categories": ["Leetcode"],
        "tags": ["Linked List","Two Pointers"],
        "url": "/problems/remove-nth-node-from-end-of-list/",
        "teaser": null
      },{
        "title": "有效的括号",
        "excerpt":"20. 有效的括号 (Easy)   给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。   有效字符串需满足：    \t左括号必须用相同类型的右括号闭合。 \t左括号必须以正确的顺序闭合。       示例 1：    输入：s = \"()\" 输出：true   示例 2：    输入：s = \"()[]{}\" 输出：true   示例 3：    输入：s = \"(]\" 输出：false   示例 4：    输入：s = \"([)]\" 输出：false   示例 5：    输入：s = \"{[]}\" 输出：true      提示：    \t1 &lt;= s.length &lt;= 104 \ts 仅由括号 '()[]{}' 组成   相关话题  [栈]   [字符串]   相似题目     括号生成 (Medium)   最长有效括号 (Hard)   删除无效的括号 (Hard)   检查替换后的词是否有效 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Stack","String"],
        "url": "/problems/valid-parentheses/",
        "teaser": null
      },{
        "title": "合并两个有序链表",
        "excerpt":"21. 合并两个有序链表 (Easy)   将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。        示例 1：     输入：l1 = [1,2,4], l2 = [1,3,4] 输出：[1,1,2,3,4,4]   示例 2：    输入：l1 = [], l2 = [] 输出：[]   示例 3：    输入：l1 = [], l2 = [0] 输出：[0]       提示：    \t两个链表的节点数目范围是 [0, 50] \t-100 &lt;= Node.val &lt;= 100 \tl1 和 l2 均按 非递减顺序 排列   相关话题  [递归]   [链表]   相似题目     合并K个升序链表 (Hard)   合并两个有序数组 (Easy)   排序链表 (Medium)   最短单词距离 II (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Recursion","Linked List"],
        "url": "/problems/merge-two-sorted-lists/",
        "teaser": null
      },{
        "title": "括号生成",
        "excerpt":"22. 括号生成 (Medium)   数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。       示例 1：    输入：n = 3 输出：[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]   示例 2：    输入：n = 1 输出：[\"()\"]       提示：    \t1 &lt;= n &lt;= 8   相关话题  [字符串]   [动态规划]   [回溯]   相似题目     电话号码的字母组合 (Medium)   有效的括号 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["String","Dynamic Programming","Backtracking"],
        "url": "/problems/generate-parentheses/",
        "teaser": null
      },{
        "title": "两两交换链表中的节点",
        "excerpt":"24. 两两交换链表中的节点 (Medium)   给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。   你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。       示例 1：     输入：head = [1,2,3,4] 输出：[2,1,4,3]   示例 2：    输入：head = [] 输出：[]   示例 3：    输入：head = [1] 输出：[1]       提示：    \t链表中节点的数目在范围 [0, 100] 内 \t0 &lt;= Node.val &lt;= 100       进阶：你能在不修改链表节点值的情况下解决这个问题吗?（也就是说，仅修改节点本身。）   相关话题  [递归]   [链表]   相似题目     K 个一组翻转链表 (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["Recursion","Linked List"],
        "url": "/problems/swap-nodes-in-pairs/",
        "teaser": null
      },{
        "title": "删除有序数组中的重复项",
        "excerpt":"26. 删除有序数组中的重复项 (Easy)   给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。   不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。       说明:   为什么返回数值是整数，但输出的答案是数组呢?   请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。   你可以想象内部操作如下:    // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝 int len = removeDuplicates(nums);  // 在函数里修改输入数组对于调用者是可见的。 // 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。 for (int i = 0; i &lt; len; i++) {     print(nums[i]); }      示例 1：    输入：nums = [1,1,2] 输出：2, nums = [1,2] 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。   示例 2：    输入：nums = [0,0,1,1,1,2,2,3,3,4] 输出：5, nums = [0,1,2,3,4] 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。       提示：    \t0 &lt;= nums.length &lt;= 3 * 104 \t-104 &lt;= nums[i] &lt;= 104 \tnums 已按升序排列       相关话题  [数组]   [双指针]   相似题目     移除元素 (Easy)   删除有序数组中的重复项 II (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Two Pointers"],
        "url": "/problems/remove-duplicates-from-sorted-array/",
        "teaser": null
      },{
        "title": "移除元素",
        "excerpt":"27. 移除元素 (Easy)   给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。   不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。   元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。       说明:   为什么返回数值是整数，但输出的答案是数组呢?   请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。   你可以想象内部操作如下:    // nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝 int len = removeElement(nums, val);  // 在函数里修改输入数组对于调用者是可见的。 // 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。 for (int i = 0; i &lt; len; i++) {     print(nums[i]); }       示例 1：    输入：nums = [3,2,2,3], val = 3 输出：2, nums = [2,2] 解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。   示例 2：    输入：nums = [0,1,2,2,3,0,4,2], val = 2 输出：5, nums = [0,1,4,0,3] 解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。       提示：    \t0 &lt;= nums.length &lt;= 100 \t0 &lt;= nums[i] &lt;= 50 \t0 &lt;= val &lt;= 100   相关话题  [数组]   [双指针]   相似题目     删除有序数组中的重复项 (Easy)   移除链表元素 (Easy)   移动零 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Two Pointers"],
        "url": "/problems/remove-element/",
        "teaser": null
      },{
        "title": "实现 strStr()",
        "excerpt":"28. 实现 strStr() (Easy)   实现 strStr() 函数。   给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。       说明：   当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。   对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。       示例 1：    输入：haystack = \"hello\", needle = \"ll\" 输出：2   示例 2：    输入：haystack = \"aaaaa\", needle = \"bba\" 输出：-1   示例 3：    输入：haystack = \"\", needle = \"\" 输出：0       提示：    \t0 &lt;= haystack.length, needle.length &lt;= 5 * 104 \thaystack 和 needle 仅由小写英文字符组成   相关话题  [双指针]   [字符串]   [字符串匹配]   相似题目     最短回文串 (Hard)   重复的子字符串 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Two Pointers","String","String Matching"],
        "url": "/problems/implement-strstr/",
        "teaser": null
      },{
        "title": "最长有效括号",
        "excerpt":"32. 最长有效括号 (Hard)   给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。         示例 1：    输入：s = \"(()\" 输出：2 解释：最长有效括号子串是 \"()\"   示例 2：    输入：s = \")()())\" 输出：4 解释：最长有效括号子串是 \"()()\"   示例 3：    输入：s = \"\" 输出：0       提示：    \t0 &lt;= s.length &lt;= 3 * 104 \ts[i] 为 '(' 或 ')'     相关话题  [栈]   [字符串]   [动态规划]   相似题目     有效的括号 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Stack","String","Dynamic Programming"],
        "url": "/problems/longest-valid-parentheses/",
        "teaser": null
      },{
        "title": "搜索插入位置",
        "excerpt":"35. 搜索插入位置 (Easy)   给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。   请必须使用时间复杂度为 O(log n) 的算法。       示例 1:    输入: nums = [1,3,5,6], target = 5 输出: 2   示例 2:    输入: nums = [1,3,5,6], target = 2 输出: 1   示例 3:    输入: nums = [1,3,5,6], target = 7 输出: 4   示例 4:    输入: nums = [1,3,5,6], target = 0 输出: 0   示例 5:    输入: nums = [1], target = 0 输出: 0       提示:    \t1 &lt;= nums.length &lt;= 104 \t-104 &lt;= nums[i] &lt;= 104 \tnums 为无重复元素的升序排列数组 \t-104 &lt;= target &lt;= 104   相关话题  [数组]   [二分查找]   相似题目     第一个错误的版本 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Binary Search"],
        "url": "/problems/search-insert-position/",
        "teaser": null
      },{
        "title": "有效的数独",
        "excerpt":"36. 有效的数独 (Medium)   请你判断一个&nbsp;9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。    \t数字&nbsp;1-9&nbsp;在每一行只能出现一次。 \t数字&nbsp;1-9&nbsp;在每一列只能出现一次。 \t数字&nbsp;1-9&nbsp;在每一个以粗实线分隔的&nbsp;3x3&nbsp;宫内只能出现一次。（请参考示例图）   &nbsp;   注意：    \t一个有效的数独（部分已被填充）不一定是可解的。 \t只需要根据以上规则，验证已经填入的数字是否有效即可。 \t空白格用&nbsp;'.'&nbsp;表示。   &nbsp;   示例 1：     输入：board =  [[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"] ,[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"] ,[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"] ,[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"] ,[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"] ,[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"] ,[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"] ,[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"] ,[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]] 输出：true   示例 2：    输入：board =  [[\"8\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"] ,[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"] ,[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"] ,[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"] ,[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"] ,[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"] ,[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"] ,[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"] ,[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]] 输出：false 解释：除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。 但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。  &nbsp;   提示：    \tboard.length == 9 \tboard[i].length == 9 \tboard[i][j] 是一位数字（1-9）或者 '.'   相关话题  [数组]   [哈希表]   [矩阵]   相似题目     解数独 (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table","Matrix"],
        "url": "/problems/valid-sudoku/",
        "teaser": null
      },{
        "title": "外观数列",
        "excerpt":"38. 外观数列 (Medium)   给定一个正整数 n ，输出外观数列的第 n 项。   「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。   你可以将其视作是由递归公式定义的数字字符串序列：    \tcountAndSay(1) = \"1\" \tcountAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。   前五项如下：    1.     1 2.     11 3.     21 4.     1211 5.     111221 第一项是数字 1  描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 \"11\" 描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 \"21\" 描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 \"1211\" 描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 \"111221\"   要 描述 一个数字字符串，首先要将字符串分割为 最小 数量的组，每个组都由连续的最多 相同字符 组成。然后对于每个组，先描述字符的数量，然后描述字符，形成一个描述组。要将描述转换为数字字符串，先将每组中的字符数量用数字替换，再将所有描述组连接起来。   例如，数字字符串 \"3322251\" 的描述如下图：           示例 1：    输入：n = 1 输出：\"1\" 解释：这是一个基本样例。   示例 2：    输入：n = 4 输出：\"1211\" 解释： countAndSay(1) = \"1\" countAndSay(2) = 读 \"1\" = 一 个 1 = \"11\" countAndSay(3) = 读 \"11\" = 二 个 1 = \"21\" countAndSay(4) = 读 \"21\" = 一 个 2 + 一 个 1 = \"12\" + \"11\" = \"1211\"       提示：    \t1 &lt;= n &lt;= 30   相关话题  [字符串]   相似题目     字符串的编码与解码 (Medium)   压缩字符串 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/count-and-say/",
        "teaser": null
      },{
        "title": "旋转图像",
        "excerpt":"48. 旋转图像 (Medium)   给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。   你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。       示例 1：     输入：matrix = [[1,2,3],[4,5,6],[7,8,9]] 输出：[[7,4,1],[8,5,2],[9,6,3]]   示例 2：     输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]] 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]   示例 3：    输入：matrix = [[1]] 输出：[[1]]   示例 4：    输入：matrix = [[1,2],[3,4]] 输出：[[3,1],[4,2]]       提示：    \tmatrix.length == n \tmatrix[i].length == n \t1 &lt;= n &lt;= 20 \t-1000 &lt;= matrix[i][j] &lt;= 1000   相关话题  [数组]   [数学]   [矩阵]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Math","Matrix"],
        "url": "/problems/rotate-image/",
        "teaser": null
      },{
        "title": "Pow(x, n)",
        "excerpt":"50. Pow(x, n) (Medium)   实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。       示例 1：    输入：x = 2.00000, n = 10 输出：1024.00000   示例 2：    输入：x = 2.10000, n = 3 输出：9.26100   示例 3：    输入：x = 2.00000, n = -2 输出：0.25000 解释：2-2 = 1/22 = 1/4 = 0.25       提示：    \t-100.0 &lt; x &lt; 100.0 \t-231 &lt;= n &lt;= 231-1 \t-104 &lt;= xn &lt;= 104   相关话题  [递归]   [数学]   相似题目     Sqrt(x) (Easy)   超级次方 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Recursion","Math"],
        "url": "/problems/powx-n/",
        "teaser": null
      },{
        "title": "最大子序和",
        "excerpt":"53. 最大子序和 (Easy)   给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。       示例 1：    输入：nums = [-2,1,-3,4,-1,2,1,-5,4] 输出：6 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。   示例 2：    输入：nums = [1] 输出：1   示例 3：    输入：nums = [0] 输出：0   示例 4：    输入：nums = [-1] 输出：-1   示例 5：    输入：nums = [-100000] 输出：-100000       提示：    \t1 &lt;= nums.length &lt;= 3 * 104 \t-105 &lt;= nums[i] &lt;= 105       进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。   相关话题  [数组]   [分治]   [动态规划]   相似题目     买卖股票的最佳时机 (Easy)   乘积最大子数组 (Medium)   数组的度 (Easy)   最长湍流子数组 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Divide and Conquer","Dynamic Programming"],
        "url": "/problems/maximum-subarray/",
        "teaser": null
      },{
        "title": "最后一个单词的长度",
        "excerpt":"58. 最后一个单词的长度 (Easy)   给你一个字符串 s，由若干单词组成，单词之间用单个或多个连续的空格字符隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0&nbsp;。   单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。   &nbsp;   示例 1：    输入：s = \"Hello World\" 输出：5   示例 2：    输入：s = \" \" 输出：0   &nbsp;   提示：    \t1 &lt;= s.length &lt;= 104 \ts 仅有英文字母和空格 ' ' 组成   相关话题  [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/length-of-last-word/",
        "teaser": null
      },{
        "title": "有效数字",
        "excerpt":"65. 有效数字 (Hard)   有效数字（按顺序）可以分成以下几个部分：    \t一个 小数 或者 整数 \t（可选）一个 'e' 或 'E' ，后面跟着一个 整数   小数（按顺序）可以分成以下几个部分：    \t（可选）一个符号字符（'+' 或 '-'） \t下述格式之一： \t \t\t至少一位数字，后面跟着一个点 '.' \t\t至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字 \t\t一个点 '.' ，后面跟着至少一位数字 \t \t   整数（按顺序）可以分成以下几个部分：    \t（可选）一个符号字符（'+' 或 '-'） \t至少一位数字   部分有效数字列举如下：    \t[\"2\", \"0089\", \"-0.1\", \"+3.14\", \"4.\", \"-.9\", \"2e10\", \"-90E3\", \"3e+7\", \"+6e-1\", \"53.5e93\", \"-123.456e789\"]   部分无效数字列举如下：    \t[\"abc\", \"1a\", \"1e\", \"e3\", \"99e2.5\", \"--6\", \"-+3\", \"95a54e53\"]   给你一个字符串 s ，如果 s 是一个 有效数字 ，请返回 true 。       示例 1：    输入：s = \"0\" 输出：true   示例 2：    输入：s = \"e\" 输出：false   示例 3：    输入：s = \".\" 输出：false   示例 4：    输入：s = \".1\" 输出：true       提示：    \t1 &lt;= s.length &lt;= 20 \ts 仅含英文字母（大写和小写），数字（0-9），加号 '+' ，减号 '-' ，或者点 '.' 。   相关话题  [字符串]   相似题目     字符串转换整数 (atoi) (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/valid-number/",
        "teaser": null
      },{
        "title": "加一",
        "excerpt":"66. 加一 (Easy)   给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。   最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。   你可以假设除了整数 0 之外，这个整数不会以零开头。       示例 1：    输入：digits = [1,2,3] 输出：[1,2,4] 解释：输入数组表示数字 123。   示例 2：    输入：digits = [4,3,2,1] 输出：[4,3,2,2] 解释：输入数组表示数字 4321。   示例 3：    输入：digits = [0] 输出：[1]       提示：    \t1 &lt;= digits.length &lt;= 100 \t0 &lt;= digits[i] &lt;= 9   相关话题  [数组]   [数学]   相似题目     字符串相乘 (Medium)   二进制求和 (Easy)   给单链表加一 (Medium)   数组形式的整数加法 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Math"],
        "url": "/problems/plus-one/",
        "teaser": null
      },{
        "title": "二进制求和",
        "excerpt":"67. 二进制求和 (Easy)   给你两个二进制字符串，返回它们的和（用二进制表示）。   输入为 非空 字符串且只包含数字&nbsp;1&nbsp;和&nbsp;0。   &nbsp;   示例&nbsp;1:   输入: a = &quot;11&quot;, b = &quot;1&quot; 输出: &quot;100&quot;  示例&nbsp;2:   输入: a = &quot;1010&quot;, b = &quot;1011&quot; 输出: &quot;10101&quot;  &nbsp;   提示：    \t每个字符串仅由字符 &#39;0&#39; 或 &#39;1&#39; 组成。 \t1 &lt;= a.length, b.length &lt;= 10^4 \t字符串如果不是 &quot;0&quot; ，就都不含前导零。   相关话题  [位运算]   [数学]   [字符串]   [模拟]   相似题目     两数相加 (Medium)   字符串相乘 (Medium)   加一 (Easy)   数组形式的整数加法 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Bit Manipulation","Math","String","Simulation"],
        "url": "/problems/add-binary/",
        "teaser": null
      },{
        "title": "x 的平方根",
        "excerpt":"69. x 的平方根 (Easy)   实现&nbsp;int sqrt(int x)&nbsp;函数。   计算并返回&nbsp;x&nbsp;的平方根，其中&nbsp;x 是非负整数。   由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。   示例 1:   输入: 4 输出: 2   示例 2:   输入: 8 输出: 2 说明: 8 的平方根是 2.82842...,  &nbsp;    由于返回类型是整数，小数部分将被舍去。   相关话题  [数学]   [二分查找]   相似题目     Pow(x, n) (Medium)   有效的完全平方数 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Math","Binary Search"],
        "url": "/problems/sqrtx/",
        "teaser": null
      },{
        "title": "爬楼梯",
        "excerpt":"70. 爬楼梯 (Easy)   假设你正在爬楼梯。需要 n&nbsp;阶你才能到达楼顶。   每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？   注意：给定 n 是一个正整数。   示例 1：   输入： 2 输出： 2 解释： 有两种方法可以爬到楼顶。 1.  1 阶 + 1 阶 2.  2 阶  示例 2：   输入： 3 输出： 3 解释： 有三种方法可以爬到楼顶。 1.  1 阶 + 1 阶 + 1 阶 2.  1 阶 + 2 阶 3.  2 阶 + 1 阶   相关话题  [记忆化搜索]   [数学]   [动态规划]   相似题目     使用最小花费爬楼梯 (Easy)   斐波那契数 (Easy)   第 N 个泰波那契数 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Memoization","Math","Dynamic Programming"],
        "url": "/problems/climbing-stairs/",
        "teaser": null
      },{
        "title": "简化路径",
        "excerpt":"71. 简化路径 (Medium)   给你一个字符串 path ，表示指向某一文件或目录的 Unix 风格 绝对路径 （以 '/' 开头），请你将其转化为更加简洁的规范路径。   在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠（即，'//'）都被视为单个斜杠 '/' 。 对于此问题，任何其他格式的点（例如，'...'）均被视为文件/目录名称。   请注意，返回的 规范路径 必须遵循下述格式：    \t始终以斜杠 '/' 开头。 \t两个目录名之间必须只有一个斜杠 '/' 。 \t最后一个目录名（如果存在）不能 以 '/' 结尾。 \t此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 '.' 或 '..'）。   返回简化后得到的 规范路径 。       示例 1：    输入：path = \"/home/\" 输出：\"/home\" 解释：注意，最后一个目录名后面没有斜杠。   示例 2：    输入：path = \"/../\" 输出：\"/\" 解释：从根目录向上一级是不可行的，因为根目录是你可以到达的最高级。   示例 3：    输入：path = \"/home//foo/\" 输出：\"/home/foo\" 解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。   示例 4：    输入：path = \"/a/./b/../../c/\" 输出：\"/c\"       提示：    \t1 &lt;= path.length &lt;= 3000 \tpath 由英文字母，数字，'.'，'/' 或 '_' 组成。 \tpath 是一个有效的 Unix 风格绝对路径。   相关话题  [栈]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Stack","String"],
        "url": "/problems/simplify-path/",
        "teaser": null
      },{
        "title": "删除排序链表中的重复元素",
        "excerpt":"83. 删除排序链表中的重复元素 (Easy)   存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。   返回同样按升序排列的结果链表。       示例 1：     输入：head = [1,1,2] 输出：[1,2]   示例 2：     输入：head = [1,1,2,3,3] 输出：[1,2,3]       提示：    \t链表中节点数目在范围 [0, 300] 内 \t-100 &lt;= Node.val &lt;= 100 \t题目数据保证链表已经按升序排列   相关话题  [链表]   相似题目     删除排序链表中的重复元素 II (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Linked List"],
        "url": "/problems/remove-duplicates-from-sorted-list/",
        "teaser": null
      },{
        "title": "合并两个有序数组",
        "excerpt":"88. 合并两个有序数组 (Easy)   给你两个按 非递减顺序 排列的整数数组&nbsp;nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。   请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。   注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。   &nbsp;   示例 1：    输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 输出：[1,2,2,3,5,6] 解释：需要合并 [1,2,3] 和 [2,5,6] 。 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。   示例 2：    输入：nums1 = [1], m = 1, nums2 = [], n = 0 输出：[1] 解释：需要合并 [1] 和 [] 。 合并结果是 [1] 。   示例 3：    输入：nums1 = [0], m = 0, nums2 = [1], n = 1 输出：[1] 解释：需要合并的数组是 [] 和 [1] 。 合并结果是 [1] 。 注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。   &nbsp;   提示：    \tnums1.length == m + n \tnums2.length == n \t0 &lt;= m, n &lt;= 200 \t1 &lt;= m + n &lt;= 200 \t-109 &lt;= nums1[i], nums2[j] &lt;= 109   &nbsp;   进阶：你可以设计实现一个时间复杂度为 O(m + n) 的算法解决此问题吗？   相关话题  [数组]   [双指针]   [排序]   相似题目     合并两个有序链表 (Easy)   有序数组的平方 (Easy)   区间列表的交集 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Two Pointers","Sorting"],
        "url": "/problems/merge-sorted-array/",
        "teaser": null
      },{
        "title": "相同的树",
        "excerpt":"100. 相同的树 (Easy)   给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。   如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。       示例 1：     输入：p = [1,2,3], q = [1,2,3] 输出：true   示例 2：     输入：p = [1,2], q = [1,null,2] 输出：false   示例 3：     输入：p = [1,2,1], q = [1,1,2] 输出：false       提示：    \t两棵树上的节点数目都在范围 [0, 100] 内 \t-104 &lt;= Node.val &lt;= 104   相关话题  [树]   [深度优先搜索]   [广度优先搜索]   [二叉树]     解法  ","categories": ["Leetcode"],
        "tags": ["Tree","Depth-First Search","Breadth-First Search","Binary Tree"],
        "url": "/problems/same-tree/",
        "teaser": null
      },{
        "title": "对称二叉树",
        "excerpt":"101. 对称二叉树 (Easy)   给定一个二叉树，检查它是否是镜像对称的。   &nbsp;   例如，二叉树&nbsp;[1,2,2,3,4,4,3] 是对称的。       1    / \\   2   2  / \\ / \\ 3  4 4  3   &nbsp;   但是下面这个&nbsp;[1,2,2,null,3,null,3] 则不是镜像对称的:       1    / \\   2   2    \\   \\    3    3   &nbsp;   进阶：   你可以运用递归和迭代两种方法解决这个问题吗？   相关话题  [树]   [深度优先搜索]   [广度优先搜索]   [二叉树]     解法  ","categories": ["Leetcode"],
        "tags": ["Tree","Depth-First Search","Breadth-First Search","Binary Tree"],
        "url": "/problems/symmetric-tree/",
        "teaser": null
      },{
        "title": "二叉树的最大深度",
        "excerpt":"104. 二叉树的最大深度 (Easy)   给定一个二叉树，找出其最大深度。   二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。   说明:&nbsp;叶子节点是指没有子节点的节点。   示例：  给定二叉树 [3,9,20,null,null,15,7]，       3    / \\   9  20     /  \\    15   7  返回它的最大深度&nbsp;3 。   相关话题  [树]   [深度优先搜索]   [广度优先搜索]   [二叉树]   相似题目     平衡二叉树 (Easy)   二叉树的最小深度 (Easy)   N 叉树的最大深度 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Tree","Depth-First Search","Breadth-First Search","Binary Tree"],
        "url": "/problems/maximum-depth-of-binary-tree/",
        "teaser": null
      },{
        "title": "将有序数组转换为二叉搜索树",
        "excerpt":"108. 将有序数组转换为二叉搜索树 (Easy)   给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。   高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。       示例 1：     输入：nums = [-10,-3,0,5,9] 输出：[0,-3,9,-10,null,5] 解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：    示例 2：     输入：nums = [1,3] 输出：[3,1] 解释：[1,3] 和 [3,1] 都是高度平衡二叉搜索树。       提示：    \t1 &lt;= nums.length &lt;= 104 \t-104 &lt;= nums[i] &lt;= 104 \tnums 按 严格递增 顺序排列   相关话题  [树]   [二叉搜索树]   [数组]   [分治]   [二叉树]   相似题目     有序链表转换二叉搜索树 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Tree","Binary Search Tree","Array","Divide and Conquer","Binary Tree"],
        "url": "/problems/convert-sorted-array-to-binary-search-tree/",
        "teaser": null
      },{
        "title": "平衡二叉树",
        "excerpt":"110. 平衡二叉树 (Easy)   给定一个二叉树，判断它是否是高度平衡的二叉树。   本题中，一棵高度平衡二叉树定义为：    一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。        示例 1：     输入：root = [3,9,20,null,null,15,7] 输出：true   示例 2：     输入：root = [1,2,2,3,3,null,null,4,4] 输出：false   示例 3：    输入：root = [] 输出：true       提示：    \t树中的节点数在范围 [0, 5000] 内 \t-104 &lt;= Node.val &lt;= 104   相关话题  [树]   [深度优先搜索]   [二叉树]   相似题目     二叉树的最大深度 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Tree","Depth-First Search","Binary Tree"],
        "url": "/problems/balanced-binary-tree/",
        "teaser": null
      },{
        "title": "路径总和",
        "excerpt":"112. 路径总和 (Easy)   给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。   叶子节点 是指没有子节点的节点。       示例 1：     输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22 输出：true   示例 2：     输入：root = [1,2,3], targetSum = 5 输出：false   示例 3：    输入：root = [1,2], targetSum = 0 输出：false       提示：    \t树中节点的数目在范围 [0, 5000] 内 \t-1000 &lt;= Node.val &lt;= 1000 \t-1000 &lt;= targetSum &lt;= 1000   相关话题  [树]   [深度优先搜索]   [二叉树]   相似题目     路径总和 II (Medium)   二叉树中的最大路径和 (Hard)   求根节点到叶节点数字之和 (Medium)   路径总和 III (Medium)   路径总和 IV (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Tree","Depth-First Search","Binary Tree"],
        "url": "/problems/path-sum/",
        "teaser": null
      },{
        "title": "杨辉三角",
        "excerpt":"118. 杨辉三角 (Easy)   给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。   在「杨辉三角」中，每个数是它左上方和右上方的数的和。          示例 1:    输入: numRows = 5 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]   示例 2:    输入: numRows = 1 输出: [[1]]       提示:    \t1 &lt;= numRows &lt;= 30   相关话题  [数组]   [动态规划]   相似题目     杨辉三角 II (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Dynamic Programming"],
        "url": "/problems/pascals-triangle/",
        "teaser": null
      },{
        "title": "杨辉三角 II",
        "excerpt":"119. 杨辉三角 II (Easy)   给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。   在「杨辉三角」中，每个数是它左上方和右上方的数的和。          示例 1:    输入: rowIndex = 3 输出: [1,3,3,1]   示例 2:    输入: rowIndex = 0 输出: [1]   示例 3:    输入: rowIndex = 1 输出: [1,1]       提示:    \t0 &lt;= rowIndex &lt;= 33       进阶：   你可以优化你的算法到 O(rowIndex) 空间复杂度吗？   相关话题  [数组]   [动态规划]   相似题目     杨辉三角 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Dynamic Programming"],
        "url": "/problems/pascals-triangle-ii/",
        "teaser": null
      },{
        "title": "买卖股票的最佳时机",
        "excerpt":"121. 买卖股票的最佳时机 (Easy)   给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。   你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。   返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。       示例 1：    输入：[7,1,5,3,6,4] 输出：5 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。   示例 2：    输入：prices = [7,6,4,3,1] 输出：0 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。       提示：    \t1 &lt;= prices.length &lt;= 105 \t0 &lt;= prices[i] &lt;= 104   相关话题  [数组]   [动态规划]   相似题目     最大子序和 (Easy)   买卖股票的最佳时机 II (Easy)   买卖股票的最佳时机 III (Hard)   买卖股票的最佳时机 IV (Hard)   最佳买卖股票时机含冷冻期 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Dynamic Programming"],
        "url": "/problems/best-time-to-buy-and-sell-stock/",
        "teaser": null
      },{
        "title": "买卖股票的最佳时机 II",
        "excerpt":"122. 买卖股票的最佳时机 II (Easy)   给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。   设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。   注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。       示例 1:    输入: prices = [7,1,5,3,6,4] 输出: 7 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。   示例 2:    输入: prices = [1,2,3,4,5] 输出: 4 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。      注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。   示例 3:    输入: prices = [7,6,4,3,1] 输出: 0 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。      提示：    \t1 &lt;= prices.length &lt;= 3 * 104 \t0 &lt;= prices[i] &lt;= 104   相关话题  [贪心]   [数组]   [动态规划]   相似题目     买卖股票的最佳时机 (Easy)   买卖股票的最佳时机 III (Hard)   买卖股票的最佳时机 IV (Hard)   最佳买卖股票时机含冷冻期 (Medium)   买卖股票的最佳时机含手续费 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Greedy","Array","Dynamic Programming"],
        "url": "/problems/best-time-to-buy-and-sell-stock-ii/",
        "teaser": null
      },{
        "title": "验证回文串",
        "excerpt":"125. 验证回文串 (Easy)   给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。   说明：本题中，我们将空字符串定义为有效的回文串。       示例 1:    输入: \"A man, a plan, a canal: Panama\" 输出: true 解释：\"amanaplanacanalpanama\" 是回文串   示例 2:    输入: \"race a car\" 输出: false 解释：\"raceacar\" 不是回文串       提示：    \t1 &lt;= s.length &lt;= 2 * 105 \t字符串 s 由 ASCII 字符组成   相关话题  [双指针]   [字符串]   相似题目     回文链表 (Easy)   验证回文字符串 Ⅱ (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Two Pointers","String"],
        "url": "/problems/valid-palindrome/",
        "teaser": null
      },{
        "title": "只出现一次的数字",
        "excerpt":"136. 只出现一次的数字 (Easy)   给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。   说明：   你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？   示例 1:   输入: [2,2,1] 输出: 1   示例&nbsp;2:   输入: [4,1,2,1,2] 输出: 4  相关话题  [位运算]   [数组]   相似题目     只出现一次的数字 II (Medium)   只出现一次的数字 III (Medium)   丢失的数字 (Easy)   寻找重复数 (Medium)   找不同 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Bit Manipulation","Array"],
        "url": "/problems/single-number/",
        "teaser": null
      },{
        "title": "只出现一次的数字 II",
        "excerpt":"137. 只出现一次的数字 II (Medium)   给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。       示例 1：    输入：nums = [2,2,3,2] 输出：3   示例 2：    输入：nums = [0,1,0,1,0,1,99] 输出：99       提示：    \t1 &lt;= nums.length &lt;= 3 * 104 \t-231 &lt;= nums[i] &lt;= 231 - 1 \tnums 中，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次       进阶：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？   相关话题  [位运算]   [数组]   相似题目     只出现一次的数字 (Easy)   只出现一次的数字 III (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Bit Manipulation","Array"],
        "url": "/problems/single-number-ii/",
        "teaser": null
      },{
        "title": "单词拆分",
        "excerpt":"139. 单词拆分 (Medium)   给你一个字符串 s 和一个字符串列表 wordDict 作为字典，判定&nbsp;s 是否可以由空格拆分为一个或多个在字典中出现的单词。   说明：拆分时可以重复使用字典中的单词。   &nbsp;   示例 1：    输入: s = \"leetcode\", wordDict = [\"leet\", \"code\"] 输出: true 解释: 返回 true 因为 \"leetcode\" 可以被拆分成 \"leet code\"。   示例 2：    输入: s = \"applepenapple\", wordDict = [\"apple\", \"pen\"] 输出: true 解释: 返回 true 因为 \"applepenapple\" 可以被拆分成 \"apple pen apple\"。 &nbsp;    注意你可以重复使用字典中的单词。   示例 3：    输入: s = \"catsandog\", wordDict = [\"cats\", \"dog\", \"sand\", \"and\", \"cat\"] 输出: false   &nbsp;   提示：    \t1 &lt;= s.length &lt;= 300 \t1 &lt;= wordDict.length &lt;= 1000 \t1 &lt;= wordDict[i].length &lt;= 20 \ts 和 wordDict[i] 仅有小写英文字母组成 \twordDict 中的所有字符串 互不相同   相关话题  [字典树]   [记忆化搜索]   [哈希表]   [字符串]   [动态规划]   相似题目     单词拆分 II (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["Trie","Memoization","Hash Table","String","Dynamic Programming"],
        "url": "/problems/word-break/",
        "teaser": null
      },{
        "title": "环形链表",
        "excerpt":"141. 环形链表 (Easy)   给你一个链表的头节点 head ，判断链表中是否有环。   如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。   如果链表中存在环，则返回 true 。 否则，返回 false 。   &nbsp;   示例 1：       输入：head = [3,2,0,-4], pos = 1 输出：true 解释：链表中有一个环，其尾部连接到第二个节点。   示例&nbsp;2：       输入：head = [1,2], pos = 0 输出：true 解释：链表中有一个环，其尾部连接到第一个节点。   示例 3：       输入：head = [1], pos = -1 输出：false 解释：链表中没有环。   &nbsp;   提示：    \t链表中节点的数目范围是 [0, 104] \t-105 &lt;= Node.val &lt;= 105 \tpos 为 -1 或者链表中的一个 有效索引 。   &nbsp;   进阶：你能用 O(1)（即，常量）内存解决此问题吗？   相关话题  [哈希表]   [链表]   [双指针]   相似题目     环形链表 II (Medium)   快乐数 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","Linked List","Two Pointers"],
        "url": "/problems/linked-list-cycle/",
        "teaser": null
      },{
        "title": "翻转字符串里的单词",
        "excerpt":"151. 翻转字符串里的单词 (Medium)   给你一个字符串 s ，逐个翻转字符串中的所有 单词 。   单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。   请你返回一个翻转 s 中单词顺序并用单个空格相连的字符串。   说明：    \t输入字符串 s 可以在前面、后面或者单词间包含多余的空格。 \t翻转后单词间应当仅用一个空格分隔。 \t翻转后的字符串中不应包含额外的空格。       示例 1：    输入：s = \"the sky is blue\" 输出：\"blue is sky the\"   示例 2：    输入：s = \"  hello world  \" 输出：\"world hello\" 解释：输入字符串可以在前面或者后面包含多余的空格，但是翻转后的字符不能包括。   示例 3：    输入：s = \"a good   example\" 输出：\"example good a\" 解释：如果两个单词间有多余的空格，将翻转后单词间的空格减少到只含一个。   示例 4：    输入：s = \"  Bob    Loves  Alice   \" 输出：\"Alice Loves Bob\"   示例 5：    输入：s = \"Alice does not even like bob\" 输出：\"bob like even not does Alice\"       提示：    \t1 &lt;= s.length &lt;= 104 \ts 包含英文大小写字母、数字和空格 ' ' \ts 中 至少存在一个 单词          进阶：    \t请尝试使用 O(1) 额外空间复杂度的原地解法。   相关话题  [双指针]   [字符串]   相似题目     翻转字符串里的单词 II (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Two Pointers","String"],
        "url": "/problems/reverse-words-in-a-string/",
        "teaser": null
      },{
        "title": "最小栈",
        "excerpt":"155. 最小栈 (Easy)   设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。    \tpush(x) &mdash;&mdash; 将元素 x 推入栈中。 \tpop()&nbsp;&mdash;&mdash; 删除栈顶的元素。 \ttop()&nbsp;&mdash;&mdash; 获取栈顶元素。 \tgetMin() &mdash;&mdash; 检索栈中的最小元素。   &nbsp;   示例:   输入： [&quot;MinStack&quot;,&quot;push&quot;,&quot;push&quot;,&quot;push&quot;,&quot;getMin&quot;,&quot;pop&quot;,&quot;top&quot;,&quot;getMin&quot;] [[],[-2],[0],[-3],[],[],[],[]]  输出： [null,null,null,null,-3,null,0,-2]  解释： MinStack minStack = new MinStack(); minStack.push(-2); minStack.push(0); minStack.push(-3); minStack.getMin();   --&gt; 返回 -3. minStack.pop(); minStack.top();      --&gt; 返回 0. minStack.getMin();   --&gt; 返回 -2.   &nbsp;   提示：    \tpop、top 和 getMin 操作总是在 非空栈 上调用。   相关话题  [栈]   [设计]   相似题目     滑动窗口最大值 (Hard)   最大栈 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Stack","Design"],
        "url": "/problems/min-stack/",
        "teaser": null
      },{
        "title": "相交链表",
        "excerpt":"160. 相交链表 (Easy)   给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。   图示两个链表在节点 c1 开始相交：      题目数据 保证 整个链式结构中不存在环。   注意，函数返回结果后，链表必须 保持其原始结构 。       示例 1：       输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3 输出：Intersected at '8' 解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。 从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。 在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。   示例 2：       输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1 输出：Intersected at '2' 解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。 从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。 在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。   示例 3：       输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2 输出：null 解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。 由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。 这两个链表不相交，因此返回 null 。       提示：    \tlistA 中节点数目为 m \tlistB 中节点数目为 n \t0 &lt;= m, n &lt;= 3 * 104 \t1 &lt;= Node.val &lt;= 105 \t0 &lt;= skipA &lt;= m \t0 &lt;= skipB &lt;= n \t如果 listA 和 listB 没有交点，intersectVal 为 0 \t如果 listA 和 listB 有交点，intersectVal == listA[skipA + 1] == listB[skipB + 1]       进阶：你能否设计一个时间复杂度 O(n) 、仅用 O(1) 内存的解决方案？   相关话题  [哈希表]   [链表]   [双指针]   相似题目     两个列表的最小索引总和 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","Linked List","Two Pointers"],
        "url": "/problems/intersection-of-two-linked-lists/",
        "teaser": null
      },{
        "title": "比较版本号",
        "excerpt":"165. 比较版本号 (Medium)   给你两个版本号 version1 和 version2 ，请你比较它们。   版本号由一个或多个修订号组成，各修订号由一个 '.' 连接。每个修订号由 多位数字 组成，可能包含 前导零 。每个版本号至少包含一个字符。修订号从左到右编号，下标从 0 开始，最左边的修订号下标为 0 ，下一个修订号下标为 1 ，以此类推。例如，2.5.33 和 0.1 都是有效的版本号。   比较版本号时，请按从左到右的顺序依次比较它们的修订号。比较修订号时，只需比较 忽略任何前导零后的整数值 。也就是说，修订号 1 和修订号 001 相等 。如果版本号没有指定某个下标处的修订号，则该修订号视为 0 。例如，版本 1.0 小于版本 1.1 ，因为它们下标为 0 的修订号相同，而下标为 1 的修订号分别为 0 和 1 ，0 &lt; 1 。   返回规则如下：    \t如果 version1 &gt; version2 返回 1， \t如果 version1 &lt; version2 返回 -1， \t除此之外返回 0。       示例 1：    输入：version1 = \"1.01\", version2 = \"1.001\" 输出：0 解释：忽略前导零，\"01\" 和 \"001\" 都表示相同的整数 \"1\"   示例 2：    输入：version1 = \"1.0\", version2 = \"1.0.0\" 输出：0 解释：version1 没有指定下标为 2 的修订号，即视为 \"0\"   示例 3：    输入：version1 = \"0.1\", version2 = \"1.1\" 输出：-1 解释：version1 中下标为 0 的修订号是 \"0\"，version2 中下标为 0 的修订号是 \"1\" 。0 &lt; 1，所以 version1 &lt; version2   示例 4：    输入：version1 = \"1.0.1\", version2 = \"1\" 输出：1   示例 5：    输入：version1 = \"7.5.2.4\", version2 = \"7.5.3\" 输出：-1       提示：    \t1 &lt;= version1.length, version2.length &lt;= 500 \tversion1 和 version2 仅包含数字和 '.' \tversion1 和 version2 都是 有效版本号 \tversion1 和 version2 的所有修订号都可以存储在 32 位整数 中   相关话题  [双指针]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Two Pointers","String"],
        "url": "/problems/compare-version-numbers/",
        "teaser": null
      },{
        "title": "两数之和 II - 输入有序数组",
        "excerpt":"167. 两数之和 II - 输入有序数组 (Easy)   给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。   函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数 ，所以答案数组应当满足 1 &lt;= answer[0] &lt; answer[1] &lt;= numbers.length 。   你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。      示例 1：    输入：numbers = [2,7,11,15], target = 9 输出：[1,2] 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。   示例 2：    输入：numbers = [2,3,4], target = 6 输出：[1,3]   示例 3：    输入：numbers = [-1,0], target = -1 输出：[1,2]       提示：    \t2 &lt;= numbers.length &lt;= 3 * 104 \t-1000 &lt;= numbers[i] &lt;= 1000 \tnumbers 按 递增顺序 排列 \t-1000 &lt;= target &lt;= 1000 \t仅存在一个有效答案   相关话题  [数组]   [双指针]   [二分查找]   相似题目     两数之和 (Easy)   两数之和 IV - 输入 BST (Easy)   小于 K 的两数之和 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Two Pointers","Binary Search"],
        "url": "/problems/two-sum-ii-input-array-is-sorted/",
        "teaser": null
      },{
        "title": "Excel表列名称",
        "excerpt":"168. Excel表列名称 (Easy)   给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。   例如：    A -&gt; 1 B -&gt; 2 C -&gt; 3 ... Z -&gt; 26 AA -&gt; 27 AB -&gt; 28  ...       示例 1：    输入：columnNumber = 1 输出：\"A\"   示例 2：    输入：columnNumber = 28 输出：\"AB\"   示例 3：    输入：columnNumber = 701 输出：\"ZY\"   示例 4：    输入：columnNumber = 2147483647 输出：\"FXSHRXW\"       提示：    \t1 &lt;= columnNumber &lt;= 231 - 1   相关话题  [数学]   [字符串]   相似题目     Excel 表列序号 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Math","String"],
        "url": "/problems/excel-sheet-column-title/",
        "teaser": null
      },{
        "title": "多数元素",
        "excerpt":"169. 多数元素 (Easy)   给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。   你可以假设数组是非空的，并且给定的数组总是存在多数元素。       示例 1：    输入：[3,2,3] 输出：3  示例 2：    输入：[2,2,1,1,1,2,2] 输出：2       进阶：    \t尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。   相关话题  [数组]   [哈希表]   [分治]   [计数]   [排序]   相似题目     求众数 II (Medium)   检查一个数是否在数组中占绝大多数 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table","Divide and Conquer","Counting","Sorting"],
        "url": "/problems/majority-element/",
        "teaser": null
      },{
        "title": "Excel 表列序号",
        "excerpt":"171. Excel 表列序号 (Easy)   给你一个字符串&nbsp;columnTitle ，表示 Excel 表格中的列名称。返回该列名称对应的列序号。   &nbsp;   例如，        A -&gt; 1     B -&gt; 2     C -&gt; 3     ...     Z -&gt; 26     AA -&gt; 27     AB -&gt; 28      ...   &nbsp;   示例 1:    输入: columnTitle = \"A\" 输出: 1   示例&nbsp;2:    输入: columnTitle = \"AB\" 输出: 28   示例&nbsp;3:    输入: columnTitle = \"ZY\" 输出: 701  示例 4:    输入: columnTitle = \"FXSHRXW\" 输出: 2147483647   &nbsp;   提示：    \t1 &lt;= columnTitle.length &lt;= 7 \tcolumnTitle 仅由大写英文组成 \tcolumnTitle 在范围 [\"A\", \"FXSHRXW\"] 内   相关话题  [数学]   [字符串]   相似题目     Excel表列名称 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Math","String"],
        "url": "/problems/excel-sheet-column-number/",
        "teaser": null
      },{
        "title": "阶乘后的零",
        "excerpt":"172. 阶乘后的零 (Easy)   给定一个整数 n，返回 n! 结果尾数中零的数量。   示例 1:   输入: 3 输出: 0 解释:&nbsp;3! = 6, 尾数中没有零。  示例&nbsp;2:   输入: 5 输出: 1 解释:&nbsp;5! = 120, 尾数中有 1 个零.  说明: 你算法的时间复杂度应为&nbsp;O(log&nbsp;n)&nbsp;。   相关话题  [数学]   相似题目     数字 1 的个数 (Hard)   阶乘函数后 K 个零 (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["Math"],
        "url": "/problems/factorial-trailing-zeroes/",
        "teaser": null
      },{
        "title": "查找重复的电子邮箱",
        "excerpt":"182. 查找重复的电子邮箱 (Easy)   编写一个 SQL 查询，查找&nbsp;Person 表中所有重复的电子邮箱。   示例：   +----+---------+ | Id | Email   | +----+---------+ | 1  | a@b.com | | 2  | c@d.com | | 3  | a@b.com | +----+---------+   根据以上输入，你的查询应返回以下结果：   +---------+ | Email   | +---------+ | a@b.com | +---------+   说明：所有电子邮箱都是小写字母。   相关话题  [数据库]     解法  ","categories": ["Leetcode"],
        "tags": ["Database"],
        "url": "/problems/duplicate-emails/",
        "teaser": null
      },{
        "title": "旋转数组",
        "excerpt":"189. 旋转数组 (Medium)   给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。       进阶：    \t尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。 \t你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？       示例 1:    输入: nums = [1,2,3,4,5,6,7], k = 3 输出: [5,6,7,1,2,3,4] 解释: 向右旋转 1 步: [7,1,2,3,4,5,6] 向右旋转 2 步: [6,7,1,2,3,4,5] 向右旋转 3 步: [5,6,7,1,2,3,4]   示例 2:    输入：nums = [-1,-100,3,99], k = 2 输出：[3,99,-1,-100] 解释:  向右旋转 1 步: [99,-1,-100,3] 向右旋转 2 步: [3,99,-1,-100]      提示：    \t1 &lt;= nums.length &lt;= 2 * 104 \t-231 &lt;= nums[i] &lt;= 231 - 1 \t0 &lt;= k &lt;= 105      相关话题  [数组]   [数学]   [双指针]   相似题目     旋转链表 (Medium)   翻转字符串里的单词 II (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Math","Two Pointers"],
        "url": "/problems/rotate-array/",
        "teaser": null
      },{
        "title": "颠倒二进制位",
        "excerpt":"190. 颠倒二进制位 (Easy)   颠倒给定的 32 位无符号整数的二进制位。       提示：    \t请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。 \t在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在上面的 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。       进阶:  如果多次调用这个函数，你将如何优化你的算法？       示例 1：    输入: 00000010100101000001111010011100 输出: 00111001011110000010100101000000 解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，      因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。  示例 2：    输入：11111111111111111111111111111101 输出：10111111111111111111111111111111 解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，      因此返回 3221225471 其二进制表示形式为 10111111111111111111111111111111 。  示例 1：    输入：n = 00000010100101000001111010011100 输出：964176192 (00111001011110000010100101000000) 解释：输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，      因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。  示例 2：    输入：n = 11111111111111111111111111111101 输出：3221225471 (10111111111111111111111111111111) 解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，      因此返回 3221225471 其二进制表示形式为 10111111111111111111111111111111 。      提示：    \t输入是一个长度为 32 的二进制字符串   相关话题  [位运算]   [分治]   相似题目     整数反转 (Easy)   位1的个数 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Bit Manipulation","Divide and Conquer"],
        "url": "/problems/reverse-bits/",
        "teaser": null
      },{
        "title": "位1的个数",
        "excerpt":"191. 位1的个数 (Easy)   编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。       提示：    \t请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。 \t在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在上面的 示例 3 中，输入表示有符号整数 -3。       示例 1：    输入：00000000000000000000000000001011 输出：3 解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。   示例 2：    输入：00000000000000000000000010000000 输出：1 解释：输入的二进制串 00000000000000000000000010000000 中，共有一位为 '1'。   示例 3：    输入：11111111111111111111111111111101 输出：31 解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 '1'。      提示：    \t输入必须是长度为 32 的 二进制串 。          进阶：    \t如果多次调用这个函数，你将如何优化你的算法？   相关话题  [位运算]   相似题目     颠倒二进制位 (Easy)   2 的幂 (Easy)   比特位计数 (Easy)   二进制手表 (Easy)   汉明距离 (Easy)   交替位二进制数 (Easy)   二进制表示中质数个计算置位 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Bit Manipulation"],
        "url": "/problems/number-of-1-bits/",
        "teaser": null
      },{
        "title": "统计词频",
        "excerpt":"192. 统计词频 (Medium)   写一个 bash 脚本以统计一个文本文件&nbsp;words.txt&nbsp;中每个单词出现的频率。   为了简单起见，你可以假设：    \twords.txt只包括小写字母和&nbsp;&#39; &#39;&nbsp;。 \t每个单词只由小写字母组成。 \t单词间由一个或多个空格字符分隔。   示例:   假设 words.txt 内容如下：   the day is sunny the the the sunny is is   你的脚本应当输出（以词频降序排列）：   the 4 is 3 sunny 2 day 1   说明:    \t不要担心词频相同的单词的排序问题，每个单词出现的频率都是唯一的。 \t你可以使用一行&nbsp;Unix pipes&nbsp;实现吗？   相关话题  [Shell]   相似题目     前 K 个高频元素 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Shell"],
        "url": "/problems/word-frequency/",
        "teaser": null
      },{
        "title": "有效电话号码",
        "excerpt":"193. 有效电话号码 (Easy)   给定一个包含电话号码列表（一行一个电话号码）的文本文件 file.txt，写一个单行 bash 脚本输出所有有效的电话号码。   你可以假设一个有效的电话号码必须满足以下两种格式： (xxx) xxx-xxxx 或 xxx-xxx-xxxx。（x 表示一个数字）   你也可以假设每行前后没有多余的空格字符。       示例：   假设 file.txt 内容如下：    987-123-4567 123 456 7890 (123) 456-7890   你的脚本应当输出下列有效的电话号码：    987-123-4567 (123) 456-7890   相关话题  [Shell]     解法  ","categories": ["Leetcode"],
        "tags": ["Shell"],
        "url": "/problems/valid-phone-numbers/",
        "teaser": null
      },{
        "title": "转置文件",
        "excerpt":"194. 转置文件 (Medium)   给定一个文件 file.txt，转置它的内容。   你可以假设每行列数相同，并且每个字段由 ' ' 分隔。       示例：   假设 file.txt 文件内容如下：    name age alice 21 ryan 30   应当输出：    name alice ryan age 21 30   相关话题  [Shell]     解法  ","categories": ["Leetcode"],
        "tags": ["Shell"],
        "url": "/problems/transpose-file/",
        "teaser": null
      },{
        "title": "第十行",
        "excerpt":"195. 第十行 (Easy)   给定一个文本文件&nbsp;file.txt，请只打印这个文件中的第十行。   示例:   假设&nbsp;file.txt 有如下内容：   Line 1 Line 2 Line 3 Line 4 Line 5 Line 6 Line 7 Line 8 Line 9 Line 10   你的脚本应当显示第十行：   Line 10   说明:  1. 如果文件少于十行，你应当输出什么？  2. 至少有三种不同的解法，请尝试尽可能多的方法来解题。   相关话题  [Shell]     解法  ","categories": ["Leetcode"],
        "tags": ["Shell"],
        "url": "/problems/tenth-line/",
        "teaser": null
      },{
        "title": "打家劫舍",
        "excerpt":"198. 打家劫舍 (Medium)   你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。   给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。       示例 1：    输入：[1,2,3,1] 输出：4 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。      偷窃到的最高金额 = 1 + 3 = 4 。  示例 2：    输入：[2,7,9,3,1] 输出：12 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。      偷窃到的最高金额 = 2 + 9 + 1 = 12 。       提示：    \t1 &lt;= nums.length &lt;= 100 \t0 &lt;= nums[i] &lt;= 400   相关话题  [数组]   [动态规划]   相似题目     乘积最大子数组 (Medium)   打家劫舍 II (Medium)   粉刷房子 (Medium)   栅栏涂色 (Medium)   打家劫舍 III (Medium)   不含连续1的非负整数 (Hard)   金币路径 (Hard)   删除并获得点数 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Dynamic Programming"],
        "url": "/problems/house-robber/",
        "teaser": null
      },{
        "title": "快乐数",
        "excerpt":"202. 快乐数 (Easy)   编写一个算法来判断一个数 n 是不是快乐数。   「快乐数」定义为：    \t对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。 \t然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。 \t如果 可以变为  1，那么这个数就是快乐数。   如果 n 是快乐数就返回 true ；不是，则返回 false 。       示例 1：    输入：19 输出：true 解释： 12 + 92 = 82 82 + 22 = 68 62 + 82 = 100 12 + 02 + 02 = 1   示例 2：    输入：n = 2 输出：false       提示：    \t1 &lt;= n &lt;= 231 - 1   相关话题  [哈希表]   [数学]   [双指针]   相似题目     环形链表 (Easy)   各位相加 (Easy)   丑数 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","Math","Two Pointers"],
        "url": "/problems/happy-number/",
        "teaser": null
      },{
        "title": "计数质数",
        "excerpt":"204. 计数质数 (Easy)   统计所有小于非负整数&nbsp;n&nbsp;的质数的数量。   &nbsp;   示例 1：   输入：n = 10 输出：4 解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。   示例 2：   输入：n = 0 输出：0   示例 3：   输入：n = 1 输出：0   &nbsp;   提示：    \t0 &lt;= n &lt;= 5 * 106   相关话题  [数组]   [数学]   [枚举]   [数论]   相似题目     丑数 (Easy)   丑数 II (Medium)   完全平方数 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Math","Enumeration","Number Theory"],
        "url": "/problems/count-primes/",
        "teaser": null
      },{
        "title": "反转链表",
        "excerpt":"206. 反转链表 (Easy)   给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。        示例 1：    输入：head = [1,2,3,4,5] 输出：[5,4,3,2,1]   示例 2：    输入：head = [1,2] 输出：[2,1]   示例 3：    输入：head = [] 输出：[]       提示：    \t链表中节点的数目范围是 [0, 5000] \t-5000 &lt;= Node.val &lt;= 5000       进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？     相关话题  [递归]   [链表]   相似题目     反转链表 II (Medium)   上下翻转二叉树 (Medium)   回文链表 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Recursion","Linked List"],
        "url": "/problems/reverse-linked-list/",
        "teaser": null
      },{
        "title": "数组中的第K个最大元素",
        "excerpt":"215. 数组中的第K个最大元素 (Medium)   给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。   请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。       示例 1:    输入: [3,2,1,5,6,4] 和 k = 2 输出: 5   示例 2:    输入: [3,2,3,1,2,4,5,5,6] 和 k = 4 输出: 4      提示：     \t1 &lt;= k &lt;= nums.length &lt;= 104 \t-104 &lt;= nums[i] &lt;= 104   相关话题  [数组]   [分治]   [快速选择]   [排序]   [堆（优先队列）]   相似题目     摆动排序 II (Medium)   前 K 个高频元素 (Medium)   第三大的数 (Easy)   数据流中的第 K 大元素 (Easy)   最接近原点的 K 个点 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Divide and Conquer","Quickselect","Sorting","Heap (Priority Queue)"],
        "url": "/problems/kth-largest-element-in-an-array/",
        "teaser": null
      },{
        "title": "存在重复元素",
        "excerpt":"217. 存在重复元素 (Easy)   给定一个整数数组，判断是否存在重复元素。   如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。       示例 1:    输入: [1,2,3,1] 输出: true  示例 2:    输入: [1,2,3,4] 输出: false  示例 3:    输入: [1,1,1,3,3,4,3,2,4,2] 输出: true  相关话题  [数组]   [哈希表]   [排序]   相似题目     存在重复元素 II (Easy)   存在重复元素 III (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table","Sorting"],
        "url": "/problems/contains-duplicate/",
        "teaser": null
      },{
        "title": "存在重复元素 II",
        "excerpt":"219. 存在重复元素 II (Easy)   给定一个整数数组和一个整数&nbsp;k，判断数组中是否存在两个不同的索引&nbsp;i&nbsp;和&nbsp;j，使得&nbsp;nums [i] = nums [j]，并且 i 和 j&nbsp;的差的 绝对值 至多为 k。   &nbsp;   示例&nbsp;1:   输入: nums = [1,2,3,1], k = 3 输出: true  示例 2:   输入: nums = [1,0,1,1], k = 1 输出: true  示例 3:   输入: nums = [1,2,3,1,2,3], k = 2 输出: false  相关话题  [数组]   [哈希表]   [滑动窗口]   相似题目     存在重复元素 (Easy)   存在重复元素 III (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table","Sliding Window"],
        "url": "/problems/contains-duplicate-ii/",
        "teaser": null
      },{
        "title": "翻转二叉树",
        "excerpt":"226. 翻转二叉树 (Easy)   翻转一棵二叉树。   示例：   输入：        4    /   \\   2     7  / \\   / \\ 1   3 6   9  输出：        4    /   \\   7     2  / \\   / \\ 9   6 3   1  备注:  这个问题是受到 Max Howell 的 原问题 启发的 ：   谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。  相关话题  [树]   [深度优先搜索]   [广度优先搜索]   [二叉树]     解法  ","categories": ["Leetcode"],
        "tags": ["Tree","Depth-First Search","Breadth-First Search","Binary Tree"],
        "url": "/problems/invert-binary-tree/",
        "teaser": null
      },{
        "title": "2 的幂",
        "excerpt":"231. 2 的幂 (Easy)   给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。   如果存在一个整数 x 使得 n == 2x ，则认为 n 是 2 的幂次方。       示例 1：    输入：n = 1 输出：true 解释：20 = 1   示例 2：    输入：n = 16 输出：true 解释：24 = 16   示例 3：    输入：n = 3 输出：false   示例 4：    输入：n = 4 输出：true   示例 5：    输入：n = 5 输出：false       提示：    \t-231 &lt;= n &lt;= 231 - 1       进阶：你能够不使用循环/递归解决此问题吗？   相关话题  [位运算]   [递归]   [数学]   相似题目     位1的个数 (Easy)   3的幂 (Easy)   4的幂 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Bit Manipulation","Recursion","Math"],
        "url": "/problems/power-of-two/",
        "teaser": null
      },{
        "title": "数字 1 的个数",
        "excerpt":"233. 数字 1 的个数 (Hard)   给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。       示例 1：    输入：n = 13 输出：6   示例 2：    输入：n = 0 输出：0       提示：    \t0 &lt;= n &lt;= 2 * 109   相关话题  [递归]   [数学]   [动态规划]   相似题目     阶乘后的零 (Easy)   范围内的数字计数 (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["Recursion","Math","Dynamic Programming"],
        "url": "/problems/number-of-digit-one/",
        "teaser": null
      },{
        "title": "回文链表",
        "excerpt":"234. 回文链表 (Easy)   请判断一个链表是否为回文链表。   示例 1:   输入: 1-&gt;2 输出: false  示例 2:   输入: 1-&gt;2-&gt;2-&gt;1 输出: true   进阶：  你能否用&nbsp;O(n) 时间复杂度和 O(1) 空间复杂度解决此题？   相关话题  [栈]   [递归]   [链表]   [双指针]   相似题目     回文数 (Easy)   验证回文串 (Easy)   反转链表 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Stack","Recursion","Linked List","Two Pointers"],
        "url": "/problems/palindrome-linked-list/",
        "teaser": null
      },{
        "title": "删除链表中的节点",
        "excerpt":"237. 删除链表中的节点 (Easy)   请编写一个函数，用于 删除单链表中某个特定节点 。在设计函数时需要注意，你无法访问链表的头节点&nbsp;head ，只能直接访问 要被删除的节点 。   题目数据保证需要删除的节点 不是末尾节点 。   &nbsp;   示例 1：     输入：head = [4,5,1,9], node = 5 输出：[4,1,9] 解释：指定链表中值为&nbsp;5&nbsp;的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -&gt; 1 -&gt; 9   示例 2：     输入：head = [4,5,1,9], node = 1 输出：[4,5,9] 解释：指定链表中值为&nbsp;1&nbsp;的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -&gt; 5 -&gt; 9  示例 3：    输入：head = [1,2,3,4], node = 3 输出：[1,2,4]   示例 4：    输入：head = [0,1], node = 0 输出：[1]   示例 5：    输入：head = [-3,5,-99], node = -3 输出：[5,-99]   &nbsp;   提示：    \t链表中节点的数目范围是 [2, 1000] \t-1000 &lt;= Node.val &lt;= 1000 \t链表中每个节点的值都是唯一的 \t需要删除的节点 node 是 链表中的一个有效节点 ，且 不是末尾节点   相关话题  [链表]   相似题目     移除链表元素 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Linked List"],
        "url": "/problems/delete-node-in-a-linked-list/",
        "teaser": null
      },{
        "title": "有效的字母异位词",
        "excerpt":"242. 有效的字母异位词 (Easy)   给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。   注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。       示例 1:    输入: s = \"anagram\", t = \"nagaram\" 输出: true   示例 2:    输入: s = \"rat\", t = \"car\" 输出: false      提示:    \t1 &lt;= s.length, t.length &lt;= 5 * 104 \ts 和 t 仅包含小写字母       进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？   相关话题  [哈希表]   [字符串]   [排序]   相似题目     字母异位词分组 (Medium)   回文排列 (Easy)   找到字符串中所有字母异位词 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","String","Sorting"],
        "url": "/problems/valid-anagram/",
        "teaser": null
      },{
        "title": "各位相加",
        "excerpt":"258. 各位相加 (Easy)   给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。   示例:   输入: 38 输出: 2  解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于&nbsp;2 是一位数，所以返回 2。   进阶:  你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？   相关话题  [数学]   [数论]   [模拟]   相似题目     快乐数 (Easy)   最小元素各数位之和 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Math","Number Theory","Simulation"],
        "url": "/problems/add-digits/",
        "teaser": null
      },{
        "title": "丑数",
        "excerpt":"263. 丑数 (Easy)   给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。   丑数 就是只包含质因数 2、3 和/或 5 的正整数。       示例 1：    输入：n = 6 输出：true 解释：6 = 2 × 3  示例 2：    输入：n = 8 输出：true 解释：8 = 2 × 2 × 2   示例 3：    输入：n = 14 输出：false 解释：14 不是丑数，因为它包含了另外一个质因数 7 。   示例 4：    输入：n = 1 输出：true 解释：1 通常被视为丑数。       提示：    \t-231 &lt;= n &lt;= 231 - 1   相关话题  [数学]   相似题目     快乐数 (Easy)   计数质数 (Easy)   丑数 II (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Math"],
        "url": "/problems/ugly-number/",
        "teaser": null
      },{
        "title": "丑数 II",
        "excerpt":"264. 丑数 II (Medium)   给你一个整数 n ，请你找出并返回第 n 个 丑数 。   丑数 就是只包含质因数 2、3 和/或 5 的正整数。       示例 1：    输入：n = 10 输出：12 解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。   示例 2：    输入：n = 1 输出：1 解释：1 通常被视为丑数。       提示：    \t1 &lt;= n &lt;= 1690   相关话题  [哈希表]   [数学]   [动态规划]   [堆（优先队列）]   相似题目     合并K个升序链表 (Hard)   计数质数 (Easy)   丑数 (Easy)   完全平方数 (Medium)   超级丑数 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","Math","Dynamic Programming","Heap (Priority Queue)"],
        "url": "/problems/ugly-number-ii/",
        "teaser": null
      },{
        "title": "丢失的数字",
        "excerpt":"268. 丢失的数字 (Easy)   给定一个包含 [0, n]&nbsp;中&nbsp;n&nbsp;个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。      &nbsp;   示例 1：    输入：nums = [3,0,1] 输出：2 解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。  示例 2：    输入：nums = [0,1] 输出：2 解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。  示例 3：    输入：nums = [9,6,4,2,3,5,7,0,1] 输出：8 解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。  示例 4：    输入：nums = [0] 输出：1 解释：n = 1，因为有 1 个数字，所以所有的数字都在范围 [0,1] 内。1 是丢失的数字，因为它没有出现在 nums 中。  &nbsp;   提示：    \tn == nums.length \t1 &lt;= n &lt;= 104 \t0 &lt;= nums[i] &lt;= n \tnums 中的所有数字都 独一无二   &nbsp;   进阶：你能否实现线性时间复杂度、仅使用额外常数空间的算法解决此问题?   相关话题  [位运算]   [数组]   [哈希表]   [数学]   [排序]   相似题目     缺失的第一个正数 (Hard)   只出现一次的数字 (Easy)   寻找重复数 (Medium)   情侣牵手 (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["Bit Manipulation","Array","Hash Table","Math","Sorting"],
        "url": "/problems/missing-number/",
        "teaser": null
      },{
        "title": "移动零",
        "excerpt":"283. 移动零 (Easy)   给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。   示例:   输入: [0,1,0,3,12] 输出: [1,3,12,0,0]  说明:    \t必须在原数组上操作，不能拷贝额外的数组。 \t尽量减少操作次数。   相关话题  [数组]   [双指针]   相似题目     移除元素 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Two Pointers"],
        "url": "/problems/move-zeroes/",
        "teaser": null
      },{
        "title": "单词规律",
        "excerpt":"290. 单词规律 (Easy)   给定一种规律 pattern&nbsp;和一个字符串&nbsp;str&nbsp;，判断 str 是否遵循相同的规律。   这里的&nbsp;遵循&nbsp;指完全匹配，例如，&nbsp;pattern&nbsp;里的每个字母和字符串&nbsp;str&nbsp;中的每个非空单词之间存在着双向连接的对应规律。   示例1:   输入: pattern = &quot;abba&quot;, str = &quot;dog cat cat dog&quot; 输出: true  示例 2:   输入:pattern = &quot;abba&quot;, str = &quot;dog cat cat fish&quot; 输出: false  示例 3:   输入: pattern = &quot;aaaa&quot;, str = &quot;dog cat cat dog&quot; 输出: false  示例&nbsp;4:   输入: pattern = &quot;abba&quot;, str = &quot;dog dog dog dog&quot; 输出: false  说明:  你可以假设&nbsp;pattern&nbsp;只包含小写字母，&nbsp;str&nbsp;包含了由单个空格分隔的小写字母。&nbsp; &nbsp;&nbsp;   相关话题  [哈希表]   [字符串]   相似题目     同构字符串 (Easy)   单词规律 II (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","String"],
        "url": "/problems/word-pattern/",
        "teaser": null
      },{
        "title": "Nim 游戏",
        "excerpt":"292. Nim 游戏 (Easy)   你和你的朋友，两个人一起玩 Nim 游戏：    \t桌子上有一堆石头。 \t你们轮流进行自己的回合，你作为先手。 \t每一回合，轮到的人拿掉 1 - 3 块石头。 \t拿掉最后一块石头的人就是获胜者。   假设你们每一步都是最优解。请编写一个函数，来判断你是否可以在给定石头数量为 n 的情况下赢得游戏。如果可以赢，返回 true；否则，返回 false 。       示例 1：    输入：n = 4 输出：false  解释：如果堆中有 4 块石头，那么你永远不会赢得比赛；      因为无论你拿走 1 块、2 块 还是 3 块石头，最后一块石头总是会被你的朋友拿走。   示例 2：    输入：n = 1 输出：true   示例 3：    输入：n = 2 输出：true       提示：    \t1 &lt;= n &lt;= 231 - 1   相关话题  [脑筋急转弯]   [数学]   [博弈]   相似题目     翻转游戏 II (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Brainteaser","Math","Game Theory"],
        "url": "/problems/nim-game/",
        "teaser": null
      },{
        "title": "区域和检索 - 数组不可变",
        "excerpt":"303. 区域和检索 - 数组不可变 (Easy)   给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。     实现 NumArray 类：    \tNumArray(int[] nums) 使用数组 nums 初始化对象 \tint sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）       示例：    输入： [\"NumArray\", \"sumRange\", \"sumRange\", \"sumRange\"] [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]] 输出： [null, 1, -1, -3]  解释： NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]); numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3) numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1))  numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))       提示：    \t0 &lt;= nums.length &lt;= 104 \t-105 &lt;= nums[i] &lt;= 105 \t0 &lt;= i &lt;= j &lt; nums.length \t最多调用 104 次 sumRange 方法     相关话题  [设计]   [数组]   [前缀和]   相似题目     二维区域和检索 - 矩阵不可变 (Medium)   区域和检索 - 数组可修改 (Medium)   和等于 k 的最长子数组长度 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Design","Array","Prefix Sum"],
        "url": "/problems/range-sum-query-immutable/",
        "teaser": null
      },{
        "title": "灯泡开关",
        "excerpt":"319. 灯泡开关 (Medium)   初始时有&nbsp;n 个灯泡处于关闭状态。第一轮，你将会打开所有灯泡。接下来的第二轮，你将会每两个灯泡关闭一个。   第三轮，你每三个灯泡就切换一个灯泡的开关（即，打开变关闭，关闭变打开）。第 i 轮，你每 i 个灯泡就切换一个灯泡的开关。直到第 n 轮，你只需要切换最后一个灯泡的开关。   找出并返回 n&nbsp;轮后有多少个亮着的灯泡。   &nbsp;   示例 1：       输入：n = 3 输出：1  解释： 初始时, 灯泡状态 [关闭, 关闭, 关闭]. 第一轮后, 灯泡状态 [开启, 开启, 开启]. 第二轮后, 灯泡状态 [开启, 关闭, 开启]. 第三轮后, 灯泡状态 [开启, 关闭, 关闭].   你应该返回 1，因为只有一个灯泡还亮着。   示例 2：    输入：n = 0 输出：0   示例 3：    输入：n = 1 输出：1   &nbsp;   提示：    \t0 &lt;= n &lt;= 109   相关话题  [脑筋急转弯]   [数学]   相似题目     灯泡开关 Ⅱ (Medium)   K 连续位的最小翻转次数 (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["Brainteaser","Math"],
        "url": "/problems/bulb-switcher/",
        "teaser": null
      },{
        "title": "3的幂",
        "excerpt":"326. 3的幂 (Easy)   给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。   整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3x       示例 1：    输入：n = 27 输出：true   示例 2：    输入：n = 0 输出：false   示例 3：    输入：n = 9 输出：true   示例 4：    输入：n = 45 输出：false       提示：    \t-231 &lt;= n &lt;= 231 - 1       进阶：    \t你能不使用循环或者递归来完成本题吗？   相关话题  [递归]   [数学]   相似题目     2 的幂 (Easy)   4的幂 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Recursion","Math"],
        "url": "/problems/power-of-three/",
        "teaser": null
      },{
        "title": "4的幂",
        "excerpt":"342. 4的幂 (Easy)   给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false 。   整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4x       示例 1：    输入：n = 16 输出：true   示例 2：    输入：n = 5 输出：false   示例 3：    输入：n = 1 输出：true       提示：    \t-231 &lt;= n &lt;= 231 - 1       进阶：    \t你能不使用循环或者递归来完成本题吗？   相关话题  [位运算]   [递归]   [数学]   相似题目     2 的幂 (Easy)   3的幂 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Bit Manipulation","Recursion","Math"],
        "url": "/problems/power-of-four/",
        "teaser": null
      },{
        "title": "整数拆分",
        "excerpt":"343. 整数拆分 (Medium)   给定一个正整数&nbsp;n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。   示例 1:   输入: 2 输出: 1 解释: 2 = 1 + 1, 1 &times; 1 = 1。  示例&nbsp;2:   输入: 10 输出: 36 解释: 10 = 3 + 3 + 4, 3 &times;&nbsp;3 &times;&nbsp;4 = 36。  说明: 你可以假设&nbsp;n&nbsp;不小于 2 且不大于 58。   相关话题  [数学]   [动态规划]     解法  ","categories": ["Leetcode"],
        "tags": ["Math","Dynamic Programming"],
        "url": "/problems/integer-break/",
        "teaser": null
      },{
        "title": "反转字符串",
        "excerpt":"344. 反转字符串 (Easy)   编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。   不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。   &nbsp;   示例 1：    输入：s = [\"h\",\"e\",\"l\",\"l\",\"o\"] 输出：[\"o\",\"l\",\"l\",\"e\",\"h\"]   示例 2：    输入：s = [\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"] 输出：[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]  &nbsp;   提示：    \t1 &lt;= s.length &lt;= 105 \ts[i] 都是 ASCII 码表中的可打印字符   相关话题  [递归]   [双指针]   [字符串]   相似题目     反转字符串中的元音字母 (Easy)   反转字符串 II (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Recursion","Two Pointers","String"],
        "url": "/problems/reverse-string/",
        "teaser": null
      },{
        "title": "反转字符串中的元音字母",
        "excerpt":"345. 反转字符串中的元音字母 (Easy)   给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。   元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。   &nbsp;   示例 1：    输入：s = \"hello\" 输出：\"holle\"   示例 2：    输入：s = \"leetcode\" 输出：\"leotcede\"  &nbsp;   提示：    \t1 &lt;= s.length &lt;= 3 * 105 \ts 由 可打印的 ASCII 字符组成   相关话题  [双指针]   [字符串]   相似题目     反转字符串 (Easy)   删去字符串中的元音 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Two Pointers","String"],
        "url": "/problems/reverse-vowels-of-a-string/",
        "teaser": null
      },{
        "title": "两个数组的交集 II",
        "excerpt":"350. 两个数组的交集 II (Easy)   给定两个数组，编写一个函数来计算它们的交集。   &nbsp;   示例 1：   输入：nums1 = [1,2,2,1], nums2 = [2,2] 输出：[2,2]   示例 2:   输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4] 输出：[4,9]  &nbsp;   说明：    \t输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。 \t我们可以不考虑输出结果的顺序。   进阶：    \t如果给定的数组已经排好序呢？你将如何优化你的算法？ \t如果&nbsp;nums1&nbsp;的大小比&nbsp;nums2&nbsp;小很多，哪种方法更优？ \t如果&nbsp;nums2&nbsp;的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？   相关话题  [数组]   [哈希表]   [双指针]   [二分查找]   [排序]   相似题目     两个数组的交集 (Easy)   查找常用字符 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table","Two Pointers","Binary Search","Sorting"],
        "url": "/problems/intersection-of-two-arrays-ii/",
        "teaser": null
      },{
        "title": "有效的完全平方数",
        "excerpt":"367. 有效的完全平方数 (Easy)   给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。   进阶：不要 使用任何内置的库函数，如  sqrt 。       示例 1：    输入：num = 16 输出：true   示例 2：    输入：num = 14 输出：false       提示：    \t1 &lt;= num &lt;= 2^31 - 1   相关话题  [数学]   [二分查找]   相似题目     Sqrt(x) (Easy)   平方数之和 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Math","Binary Search"],
        "url": "/problems/valid-perfect-square/",
        "teaser": null
      },{
        "title": "两整数之和",
        "excerpt":"371. 两整数之和 (Medium)   给你两个整数 a 和 b ，不使用 运算符&nbsp;+ 和&nbsp;-&nbsp;​​​​​​​，计算并返回两整数之和。   &nbsp;   示例 1：    输入：a = 1, b = 2 输出：3   示例 2：    输入：a = 2, b = 3 输出：5   &nbsp;   提示：    \t-1000 &lt;= a, b &lt;= 1000   相关话题  [位运算]   [数学]   相似题目     两数相加 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Bit Manipulation","Math"],
        "url": "/problems/sum-of-two-integers/",
        "teaser": null
      },{
        "title": "赎金信",
        "excerpt":"383. 赎金信 (Easy)   给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。   (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)       示例 1：    输入：ransomNote = \"a\", magazine = \"b\" 输出：false   示例 2：    输入：ransomNote = \"aa\", magazine = \"ab\" 输出：false   示例 3：    输入：ransomNote = \"aa\", magazine = \"aab\" 输出：true       提示：    \t你可以假设两个字符串均只含有小写字母。   相关话题  [哈希表]   [字符串]   [计数]   相似题目     贴纸拼词 (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","String","Counting"],
        "url": "/problems/ransom-note/",
        "teaser": null
      },{
        "title": "字符串中的第一个唯一字符",
        "excerpt":"387. 字符串中的第一个唯一字符 (Easy)   给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。   &nbsp;   示例：   s = &quot;leetcode&quot; 返回 0  s = &quot;loveleetcode&quot; 返回 2   &nbsp;   提示：你可以假定该字符串只包含小写字母。   相关话题  [队列]   [哈希表]   [字符串]   [计数]   相似题目     根据字符出现频率排序 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Queue","Hash Table","String","Counting"],
        "url": "/problems/first-unique-character-in-a-string/",
        "teaser": null
      },{
        "title": "UTF-8 编码验证",
        "excerpt":"393. UTF-8 编码验证 (Medium)   UTF-8 中的一个字符可能的长度为 1 到 4 字节，遵循以下的规则：    \t对于 1 字节的字符，字节的第一位设为 0 ，后面 7 位为这个符号的 unicode 码。 \t对于 n 字节的字符 (n &gt; 1)，第一个字节的前 n 位都设为1，第 n+1 位设为 0 ，后面字节的前两位一律设为 10 。剩下的没有提及的二进制位，全部为这个符号的 unicode 码。   这是 UTF-8 编码的工作方式：       Char. number range  |        UTF-8 octet sequence       (hexadecimal)    |              (binary)    --------------------+---------------------------------------------    0000 0000-0000 007F | 0xxxxxxx    0000 0080-0000 07FF | 110xxxxx 10xxxxxx    0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx    0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx   给定一个表示数据的整数数组，返回它是否为有效的 utf-8 编码。   注意：  输入是整数数组。只有每个整数的 最低 8 个有效位 用来存储数据。这意味着每个整数只表示 1 字节的数据。   示例 1：    data = [197, 130, 1], 表示 8 位的序列: 11000101 10000010 00000001.  返回 true 。 这是有效的 utf-8 编码，为一个2字节字符，跟着一个1字节字符。   示例 2：    data = [235, 140, 4], 表示 8 位的序列: 11101011 10001100 00000100.  返回 false 。 前 3 位都是 1 ，第 4 位为 0 表示它是一个3字节字符。 下一个字节是开头为 10 的延续字节，这是正确的。 但第二个延续字节不以 10 开头，所以是不符合规则的。   相关话题  [位运算]   [数组]     解法  ","categories": ["Leetcode"],
        "tags": ["Bit Manipulation","Array"],
        "url": "/problems/utf-8-validation/",
        "teaser": null
      },{
        "title": "Fizz Buzz",
        "excerpt":"412. Fizz Buzz (Easy)   写一个程序，输出从 1 到 n 数字的字符串表示。   1. 如果&nbsp;n&nbsp;是3的倍数，输出&ldquo;Fizz&rdquo;；   2. 如果&nbsp;n&nbsp;是5的倍数，输出&ldquo;Buzz&rdquo;；   3.如果&nbsp;n&nbsp;同时是3和5的倍数，输出 &ldquo;FizzBuzz&rdquo;。   示例：   n = 15,  返回: [     &quot;1&quot;,     &quot;2&quot;,     &quot;Fizz&quot;,     &quot;4&quot;,     &quot;Buzz&quot;,     &quot;Fizz&quot;,     &quot;7&quot;,     &quot;8&quot;,     &quot;Fizz&quot;,     &quot;Buzz&quot;,     &quot;11&quot;,     &quot;Fizz&quot;,     &quot;13&quot;,     &quot;14&quot;,     &quot;FizzBuzz&quot; ]   相关话题  [数学]   [字符串]   [模拟]     解法  ","categories": ["Leetcode"],
        "tags": ["Math","String","Simulation"],
        "url": "/problems/fizz-buzz/",
        "teaser": null
      },{
        "title": "等差数列划分",
        "excerpt":"413. 等差数列划分 (Medium)   如果一个数列 至少有三个元素 ，并且任意两个相邻元素之差相同，则称该数列为等差数列。    \t例如，[1,3,5,7,9]、[7,7,7,7] 和 [3,-1,-5,-9] 都是等差数列。     给你一个整数数组 nums ，返回数组 nums 中所有为等差数组的 子数组 个数。   子数组 是数组中的一个连续序列。       示例 1：    输入：nums = [1,2,3,4] 输出：3 解释：nums 中有三个子等差数组：[1, 2, 3]、[2, 3, 4] 和 [1,2,3,4] 自身。   示例 2：    输入：nums = [1] 输出：0       提示：    \t1 &lt;= nums.length &lt;= 5000 \t-1000 &lt;= nums[i] &lt;= 1000     相关话题  [数组]   [动态规划]   相似题目     等差数列划分 II - 子序列 (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Dynamic Programming"],
        "url": "/problems/arithmetic-slices/",
        "teaser": null
      },{
        "title": "第三大的数",
        "excerpt":"414. 第三大的数 (Easy)   给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。       示例 1：    输入：[3, 2, 1] 输出：1 解释：第三大的数是 1 。  示例 2：    输入：[1, 2] 输出：2 解释：第三大的数不存在, 所以返回最大的数 2 。   示例 3：    输入：[2, 2, 3, 1] 输出：1 解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。 此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。      提示：    \t1 &lt;= nums.length &lt;= 104 \t-231 &lt;= nums[i] &lt;= 231 - 1       进阶：你能设计一个时间复杂度 O(n) 的解决方案吗？   相关话题  [数组]   [排序]   相似题目     数组中的第K个最大元素 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Sorting"],
        "url": "/problems/third-maximum-number/",
        "teaser": null
      },{
        "title": "字符串相加",
        "excerpt":"415. 字符串相加 (Easy)   给定两个字符串形式的非负整数&nbsp;num1 和num2&nbsp;，计算它们的和。   &nbsp;   提示：    \tnum1 和num2&nbsp;的长度都小于 5100 \tnum1 和num2 都只包含数字&nbsp;0-9 \tnum1 和num2 都不包含任何前导零 \t你不能使用任何內建 BigInteger 库，&nbsp;也不能直接将输入的字符串转换为整数形式   相关话题  [数学]   [字符串]   [模拟]   相似题目     两数相加 (Medium)   字符串相乘 (Medium)   数组形式的整数加法 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Math","String","Simulation"],
        "url": "/problems/add-strings/",
        "teaser": null
      },{
        "title": "字符串中的单词数",
        "excerpt":"434. 字符串中的单词数 (Easy)   统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。   请注意，你可以假定字符串里不包括任何不可打印的字符。   示例:   输入: &quot;Hello, my name is John&quot; 输出: 5 解释: 这里的单词是指连续的不是空格的字符，所以 &quot;Hello,&quot; 算作 1 个单词。   相关话题  [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/number-of-segments-in-a-string/",
        "teaser": null
      },{
        "title": "路径总和 III",
        "excerpt":"437. 路径总和 III (Medium)   给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。   路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。       示例 1：       输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8 输出：3 解释：和等于 8 的路径有 3 条，如图所示。   示例 2：    输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22 输出：3       提示:    \t二叉树的节点个数的范围是 [0,1000] \t-109 &lt;= Node.val &lt;= 109  \t-1000 &lt;= targetSum &lt;= 1000    相关话题  [树]   [深度优先搜索]   [二叉树]   相似题目     路径总和 (Easy)   路径总和 II (Medium)   路径总和 IV (Medium)   最长同值路径 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Tree","Depth-First Search","Binary Tree"],
        "url": "/problems/path-sum-iii/",
        "teaser": null
      },{
        "title": "排列硬币",
        "excerpt":"441. 排列硬币 (Easy)   你总共有&nbsp;n&nbsp;枚硬币，并计划将它们按阶梯状排列。对于一个由 k 行组成的阶梯，其第 i 行必须正好有 i 枚硬币。阶梯的最后一行 可能 是不完整的。   给你一个数字&nbsp;n ，计算并返回可形成 完整阶梯行 的总行数。   &nbsp;   示例 1：     输入：n = 5 输出：2 解释：因为第三行不完整，所以返回 2 。   示例 2：     输入：n = 8 输出：3 解释：因为第四行不完整，所以返回 3 。   &nbsp;   提示：    \t1 &lt;= n &lt;= 231 - 1   相关话题  [数学]   [二分查找]     解法  ","categories": ["Leetcode"],
        "tags": ["Math","Binary Search"],
        "url": "/problems/arranging-coins/",
        "teaser": null
      },{
        "title": "压缩字符串",
        "excerpt":"443. 压缩字符串 (Medium)   给定一组字符，使用原地算法将其压缩。   压缩后的长度必须始终小于或等于原数组长度。   数组的每个元素应该是长度为1&nbsp;的字符（不是 int 整数类型）。   在完成原地修改输入数组后，返回数组的新长度。   &nbsp;   进阶：  你能否仅使用O(1) 空间解决问题？   &nbsp;   示例 1：   输入： [&quot;a&quot;,&quot;a&quot;,&quot;b&quot;,&quot;b&quot;,&quot;c&quot;,&quot;c&quot;,&quot;c&quot;]  输出： 返回 6 ，输入数组的前 6 个字符应该是：[&quot;a&quot;,&quot;2&quot;,&quot;b&quot;,&quot;2&quot;,&quot;c&quot;,&quot;3&quot;]  说明： &quot;aa&quot; 被 &quot;a2&quot; 替代。&quot;bb&quot; 被 &quot;b2&quot; 替代。&quot;ccc&quot; 被 &quot;c3&quot; 替代。   示例 2：   输入： [&quot;a&quot;]  输出： 返回 1 ，输入数组的前 1 个字符应该是：[&quot;a&quot;]  解释： 没有任何字符串被替代。   示例 3：   输入： [&quot;a&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;]  输出： 返回 4 ，输入数组的前4个字符应该是：[&quot;a&quot;,&quot;b&quot;,&quot;1&quot;,&quot;2&quot;]。  解释： 由于字符 &quot;a&quot; 不重复，所以不会被压缩。&quot;bbbbbbbbbbbb&quot; 被 &ldquo;b12&rdquo; 替代。 注意每个数字在数组中都有它自己的位置。   &nbsp;   提示：    \t所有字符都有一个ASCII值在[35, 126]区间内。 \t1 &lt;= len(chars) &lt;= 1000。   相关话题  [双指针]   [字符串]   相似题目     外观数列 (Medium)   字符串的编码与解码 (Medium)   迭代压缩字符串 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Two Pointers","String"],
        "url": "/problems/string-compression/",
        "teaser": null
      },{
        "title": "两数相加 II",
        "excerpt":"445. 两数相加 II (Medium)   给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。   你可以假设除了数字 0 之外，这两个数字都不会以零开头。       示例1：       输入：l1 = [7,2,4,3], l2 = [5,6,4] 输出：[7,8,0,7]   示例2：    输入：l1 = [2,4,3], l2 = [5,6,4] 输出：[8,0,7]   示例3：    输入：l1 = [0], l2 = [0] 输出：[0]       提示：    \t链表的长度范围为 [1, 100] \t0 &lt;= node.val &lt;= 9 \t输入数据保证链表代表的数字无前导 0       进阶：如果输入链表不能修改该如何处理？换句话说，不能对列表中的节点进行翻转。   相关话题  [栈]   [链表]   [数学]   相似题目     两数相加 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Stack","Linked List","Math"],
        "url": "/problems/add-two-numbers-ii/",
        "teaser": null
      },{
        "title": "找到所有数组中消失的数字",
        "excerpt":"448. 找到所有数组中消失的数字 (Easy)   给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。       示例 1：    输入：nums = [4,3,2,7,8,2,3,1] 输出：[5,6]   示例 2：    输入：nums = [1,1] 输出：[2]       提示：    \tn == nums.length \t1 &lt;= n &lt;= 105 \t1 &lt;= nums[i] &lt;= n   进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。   相关话题  [数组]   [哈希表]   相似题目     缺失的第一个正数 (Hard)   数组中重复的数据 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table"],
        "url": "/problems/find-all-numbers-disappeared-in-an-array/",
        "teaser": null
      },{
        "title": "书签",
        "excerpt":"GitHub     GitHub Guides - GitHub is the best way to build and ship software.   语义化版本 - 语义化版本控制规范。   PHP     Slim - PHP微框架，简单易用易拓展。   Swoole - Swoole是一个PHP的C扩展，可用来开发PHP的高性能高并发TCP/UDP Server。   Guzzle - 强大的RESTful 客户端，支持批量请求。   PHP Super Closure -  解决PHP不支持序列化(serialize) Closure 问题。   PHP Selector - 像jquery选择器一样操作操作网页DOM, 支持大部分CSS3选择器。   Simple Yet Powerful PHP Caching Class - 好用的PHP缓存类,支持：Files, MemCache, MemCached, APC, WinCache, X-Cache, PDO with SQLite。   Zephir - Zephir是一种高级编译语言,为简单编写PHP的C扩展而生。   Laravel Push Notification - Laravel 推送工具。   Intervention Image - 一个PHP图像处理和操作库，提供更简单和表达方式来创建，编辑和构图。该软件还包括提供服务提供器(ServiceProviders)和外观(Facades)，方便Laravel整合。   Sami - PHP API文档生成工具，生成代码注释文档。   overtrue/socialite PHP 通用第三方登录组件，支持：微博、QQ、微信公众平台，微信开放平台、豆瓣，Facebook、Google、GitHub、Linkedin。   overtrue/pinyin 史上最准确的PHP中文转拼音工具   overtrue/wechat 目前最好用的微信开发工具包   overtrue/package-builder Composer 包构建工具   Laravel     laravel-shopping-cart - Laravel 购物车，简单方便,文档齐全。   laravel-lang - Laravel 语言包，支持 44+ 种语言。   Laravel-MongoDB - Laravel 的 MongoDB 数据库组件   laravel-pinyin - Laravel 的中文转拼音插件，基于overtrue/pinyin   laravel-wechat - Laravel 的微信开发组件，基于overtrue/wechat   Javascript      phpjs - PHP函数的js实现。   string.js - 轻量级(&lt;5kb)的JavaScript字符串操作库，强大的字符串处理API。   underscore - 强大的js函数库，提供超多易用的封装。   readmore.js -  隐藏过长的文章。按高度隐藏的，如果担心Feed流里边因为某篇文章特别长，影响浏览时可以用上。支持bower，install readmore 即可。   share.js -  一键分享到微博、QQ空间、QQ好友、微信、腾讯微博、豆瓣、Facebook、Twitter、Linkedin、Google+、点点等社交网站。   Unslider - 简单易用的jQuery slider 插件。   SideComments.js - 类似Medium.com的文本边栏评论插件。   Github.js - GitHub API js版本。   Moment.js - 提供在JavaScript中分析，验证，操作和显示日期的API。   cheerio - 专为服务器端设计的，快速，灵活，精益的jQuery核心功能实现。   marked - 一个高效的Markdown分析器和编译器。   markdown-js - JavaScript Mardown 解析器。   Spin.js - “加载中” 动画生成工具。   emojify.js - 超简单的让你的网页支持emoji表情。   highlightjs - 代码高亮。   fengyuanchen/distpicker - 中国省市区三级联动，强大的自定义功能。   表单美化      switchery - IOS7风格的checkbox美化插件，demo: http://abpetkov.github.io/switchery/。   chosen - 下拉框美化强化插件，demo: http://harvesthq.github.io/chosen/。   formatter.js - 强大输入框格式化插件，指定输入框可输入的格式。   iCheck - 高度可定制的复选框和单选按钮 (jQuery &amp; Zepto)。   框架     ionic - 混合应用开发框架，使用html+javascript+css创建Android与IOS应用。   CSS      typo.css - 中文网页重设与排版，一致化浏览器排版效果，构建最适合中文阅读的网页排版。   规范     开源项目目录规范   JavaScript编码规范   CSS 编码规范   HTML 编码规范   Markdown 编写规范   图标      ionicons - ionic图标。   emoji查询,emoji-cheat-sheet - emoji查询。   emojify.js - 让你的网页支持emoji表情。   前端工具     FIS - Front-end Integrated Solution - 前端集成解决方案。   JavaScript的远程Web控制台 - Console.IO是一个NodeJS项目。它为网站和Web应用程序提供的远程Web控制台。它采用express.io（express和socket.io）提供用户实时体验。  它能工作在几乎所有的现代浏览器，移动设备，智能电视等平台。   CSS3动画生成工具 - 在线制作&amp;预览CSS3动画。   服务器     H2O - 比nginx快2倍的web服务器。   Atlas - 基于MySQL协议的数据库中间层项目。   工具类     StackEdit - 强大的在线Markdown编辑器，在线地址：https://stackedit.io/。   Spacegray - 特别漂亮的Sublime Text主题，建议与Monaco字体配合使用。   Colorsublime - 超多Sublime Text主题。   Sublime text 插件     Alignment - 代码对齐工具，根据=号对齐以及其它定义的符号竖向对齐你的代码。   EncodingHelper - 在状态栏显示当前文件的编码，支持从其它编码转为UTF-8。   SideBarEnhancement - 边栏菜单增强工具。   Tag - html标签助手。   All Autocomplete - 在当前打开的文件中提示函数，方法名等。   DocBlockr - 自动注释工具。   Pretty JSON - json格式化工具，快捷键：OSX: cmd+ctl+j, win: ctl+alt+j。   ColorPicker - 直接在sublime里调用调色板的工具。   Emmet - 高效编写HTML的工具，原zen-coding。   AutoFileName - 自动完成路径的文件 - 非常方便。   Git - 顾名思义。   GitGutter - 在边栏高亮你的文件内容变动，增加，删除，修改，类似git diff一样的效果。   Modific - 与上一个插件基本一样。   Sublimall - 免费的Sublime备份与同步工具，只需要一个账户，你的插件，配置，打开的文件等都会自动同步。   MarkdownEditing - Markdown编写的最好插件：语法高亮，缩写，自动完成，配色方案等   Sublime SFTP - SFTP工具。   CTags - 自动提示工具。   SublimeLinter - 语法检测工具，支持： C/C++, Java, Python, PHP, JS, HTML, CSS等。   CSScomb - CSS编码风格格式化工具。   FixMyJS, Jsfmt 与 JsFormat - Js/JSON编码风格格式化工具   AStyleFormatter - C/C++/C#/Java 编码风格格式化工具   SVG-Snippets - 设置自定义SVG片段。   Inc-Dec-Value - 数字，日期，十六进制颜色值等的递增/递减.   书籍与教程     《The Swift Programming Language》 - 中文版 Apple 官方 Swift 教程。   《程序员编程艺术 — 面试和算法心得》 - CSDN 600万博客结构之法算法之道部分经典博文优化版。   RESTful API 接口设计指北 - 不错的API设计教程。   GitHub秘籍 - GitHub秘籍   解决方案     icomet - 一个支持百万并发连接的comet服务器：icomet。   node-webkit -基于chromium和nodejs的应用，允许你使用html+javascript开发桌面应用。   pdf2htmlEX - 转换PDF为Html。   highlightjs - 代码高亮。  ","categories": ["Guide"],
        "tags": ["Bookmark"],
        "url": "/guide/bookmark/",
        "teaser": null
      },{
        "title": "最小操作次数使数组元素相等",
        "excerpt":"453. 最小操作次数使数组元素相等 (Easy)   给定一个长度为 n 的 非空 整数数组，每次操作将会使 n - 1 个元素增加 1。找出让数组所有元素相等的最小操作次数。       示例：    输入： [1,2,3] 输出： 3 解释： 只需要3次操作（注意每次操作会增加两个元素的值）： [1,2,3]  =&gt;  [2,3,3]  =&gt;  [3,4,3]  =&gt;  [4,4,4]   相关话题  [数组]   [数学]   相似题目     最少移动次数使数组元素相等 II (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Math"],
        "url": "/problems/minimum-moves-to-equal-array-elements/",
        "teaser": null
      },{
        "title": "分发饼干",
        "excerpt":"455. 分发饼干 (Easy)   假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。   对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] &gt;= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。      示例 1:    输入: g = [1,2,3], s = [1,1] 输出: 1 解释:  你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。 所以你应该输出1。   示例 2:    输入: g = [1,2], s = [1,2,3] 输出: 2 解释:  你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。 你拥有的饼干数量和尺寸都足以让所有孩子满足。 所以你应该输出2.       提示：    \t1 &lt;= g.length &lt;= 3 * 104 \t0 &lt;= s.length &lt;= 3 * 104 \t1 &lt;= g[i], s[j] &lt;= 231 - 1   相关话题  [贪心]   [数组]   [排序]     解法  ","categories": ["Leetcode"],
        "tags": ["Greedy","Array","Sorting"],
        "url": "/problems/assign-cookies/",
        "teaser": null
      },{
        "title": "重复的子字符串",
        "excerpt":"459. 重复的子字符串 (Easy)   给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。   示例 1:    输入: &quot;abab&quot;  输出: True  解释: 可由子字符串 &quot;ab&quot; 重复两次构成。   示例 2:    输入: &quot;aba&quot;  输出: False   示例 3:    输入: &quot;abcabcabcabc&quot;  输出: True  解释: 可由子字符串 &quot;abc&quot; 重复四次构成。 (或者子字符串 &quot;abcabc&quot; 重复两次构成。)   相关话题  [字符串]   [字符串匹配]   相似题目     实现 strStr() (Easy)   重复叠加字符串匹配 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["String","String Matching"],
        "url": "/problems/repeated-substring-pattern/",
        "teaser": null
      },{
        "title": "汉明距离",
        "excerpt":"461. 汉明距离 (Easy)   两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。   给你两个整数 x 和 y，计算并返回它们之间的汉明距离。       示例 1：    输入：x = 1, y = 4 输出：2 解释： 1   (0 0 0 1) 4   (0 1 0 0)        ↑   ↑ 上面的箭头指出了对应二进制位不同的位置。   示例 2：    输入：x = 3, y = 1 输出：1       提示：    \t0 &lt;= x, y &lt;= 231 - 1   相关话题  [位运算]   相似题目     位1的个数 (Easy)   汉明距离总和 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Bit Manipulation"],
        "url": "/problems/hamming-distance/",
        "teaser": null
      },{
        "title": "验证IP地址",
        "excerpt":"468. 验证IP地址 (Medium)   编写一个函数来验证输入的字符串是否是有效的 IPv4 或&nbsp;IPv6 地址。    \t如果是有效的 IPv4 地址，返回 &quot;IPv4&quot; ； \t如果是有效的 IPv6 地址，返回 &quot;IPv6&quot; ； \t如果不是上述类型的 IP 地址，返回 &quot;Neither&quot; 。   IPv4&nbsp;地址由十进制数和点来表示，每个地址包含 4 个十进制数，其范围为&nbsp;0 -&nbsp;255，&nbsp;用(&quot;.&quot;)分割。比如，172.16.254.1；   同时，IPv4 地址内的数不会以 0 开头。比如，地址&nbsp;172.16.254.01 是不合法的。   IPv6&nbsp;地址由 8 组 16 进制的数字来表示，每组表示&nbsp;16 比特。这些组数字通过 (&quot;:&quot;)分割。比如,&nbsp;&nbsp;2001:0db8:85a3:0000:0000:8a2e:0370:7334 是一个有效的地址。而且，我们可以加入一些以 0 开头的数字，字母可以使用大写，也可以是小写。所以，&nbsp;2001:db8:85a3:0:0:8A2E:0370:7334 也是一个有效的 IPv6 address地址 (即，忽略 0 开头，忽略大小写)。   然而，我们不能因为某个组的值为 0，而使用一个空的组，以至于出现 (::) 的情况。&nbsp;比如，&nbsp;2001:0db8:85a3::8A2E:0370:7334 是无效的 IPv6 地址。   同时，在 IPv6 地址中，多余的 0 也是不被允许的。比如，&nbsp;02001:0db8:85a3:0000:0000:8a2e:0370:7334 是无效的。   &nbsp;   示例 1：   输入：IP = &quot;172.16.254.1&quot; 输出：&quot;IPv4&quot; 解释：有效的 IPv4 地址，返回 &quot;IPv4&quot;   示例 2：   输入：IP = &quot;2001:0db8:85a3:0:0:8A2E:0370:7334&quot; 输出：&quot;IPv6&quot; 解释：有效的 IPv6 地址，返回 &quot;IPv6&quot;   示例 3：   输入：IP = &quot;256.256.256.256&quot; 输出：&quot;Neither&quot; 解释：既不是 IPv4 地址，又不是 IPv6 地址   示例 4：   输入：IP = &quot;2001:0db8:85a3:0:0:8A2E:0370:7334:&quot; 输出：&quot;Neither&quot;   示例 5：   输入：IP = &quot;1e1.4.5.6&quot; 输出：&quot;Neither&quot;   &nbsp;   提示：    \tIP 仅由英文字母，数字，字符 &#39;.&#39; 和 &#39;:&#39; 组成。   相关话题  [字符串]   相似题目     IP 到 CIDR (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/validate-ip-address/",
        "teaser": null
      },{
        "title": "最大连续 1 的个数",
        "excerpt":"485. 最大连续 1 的个数 (Easy)   给定一个二进制数组， 计算其中最大连续 1 的个数。       示例：    输入：[1,1,0,1,1,1] 输出：3 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.       提示：    \t输入的数组只包含 0 和 1 。 \t输入数组的长度是正整数，且不超过 10,000。   相关话题  [数组]   相似题目     最大连续1的个数 II (Medium)   最大连续1的个数 III (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array"],
        "url": "/problems/max-consecutive-ones/",
        "teaser": null
      },{
        "title": "七进制数",
        "excerpt":"504. 七进制数 (Easy)   给定一个整数，将其转化为7进制，并以字符串形式输出。   示例 1:    输入: 100 输出: &quot;202&quot;   示例 2:    输入: -7 输出: &quot;-10&quot;   注意: 输入范围是&nbsp;[-1e7, 1e7] 。   相关话题  [数学]     解法  ","categories": ["Leetcode"],
        "tags": ["Math"],
        "url": "/problems/base-7/",
        "teaser": null
      },{
        "title": "斐波那契数",
        "excerpt":"509. 斐波那契数 (Easy)   斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：    F(0) = 0，F(1) = 1 F(n) = F(n - 1) + F(n - 2)，其中 n &gt; 1   给你 n ，请计算 F(n) 。       示例 1：    输入：2 输出：1 解释：F(2) = F(1) + F(0) = 1 + 0 = 1   示例 2：    输入：3 输出：2 解释：F(3) = F(2) + F(1) = 1 + 1 = 2   示例 3：    输入：4 输出：3 解释：F(4) = F(3) + F(2) = 2 + 1 = 3       提示：    \t0 &lt;= n &lt;= 30   相关话题  [递归]   [记忆化搜索]   [数学]   [动态规划]   相似题目     爬楼梯 (Easy)   将数组拆分成斐波那契序列 (Medium)   最长的斐波那契子序列的长度 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Recursion","Memoization","Math","Dynamic Programming"],
        "url": "/problems/fibonacci-number/",
        "teaser": null
      },{
        "title": "PHP 指南",
        "excerpt":"PHP语言学习资料索引   目录     基础学习   进阶学习   热门框架   模板引擎   开发工具   项目部署   常用工具   社区论坛   基础学习     PHP 手册   入门指引   安装与配置   语言参考   安全   特点   函数参考   PHP 核心：骇客指南   FAQ：常见问题   附录   进阶学习     PHP 之道: PHP The Right Way   Awesome PHP: A curated list of amazingly awesome PHP libraries, resources and shiny things.   热门框架     Laravel: The PHP Framework For Web Artisans   Symfony: Symfony is a set of PHP Components, a Web Application framework, a Philosophy, and a Community — all working together in harmony.   Yii: Yii 是一个 高性能 的，适用于开发 WEB 2.0 应用的 PHP 框架。   Zend Framework: Focused on Simplicity, Reusability, and Performance.   CodeIgniter: CodeIgniter 是一个小巧但功能强大的 PHP 框架，作为一个简单而“优雅”的工具包，它可以为开发者们建立功能完善的 Web 应用程序。   更多热门框架   模板引擎     Twig: The flexible, fast, and secure template engine for PHP.   开发工具     Sublime Text: Sublime Text is a sophisticated text editor for code, markup and prose.   PhpStorm: Lightning-smart PHP IDE   项目部署     Deployer: Deployment tool for PHP.   常用工具     PHP Sandbox: You can test your PHP code here on many php versions.   PHP For Windows: This site is dedicated to supporting PHP on Microsoft Windows.   Composer: Dependency Manager for PHP.   Xdebug: Debugger and Profiler Tool for PHP.   PHPUnit: PHPUnit is a programmer-oriented testing framework for PHP.   社区论坛     Laravel China 社区: 高品质的 Laravel 开发者社区    欢迎各位同学Star、提交Pr、反馈问题。   [阅读原文]  ","categories": ["Guide"],
        "tags": ["PHP"],
        "url": "/post-php-guide/",
        "teaser": null
      },{
        "title": "检测大写字母",
        "excerpt":"520. 检测大写字母 (Easy)   给定一个单词，你需要判断单词的大写使用是否正确。   我们定义，在以下情况时，单词的大写用法是正确的：    \t全部字母都是大写，比如&quot;USA&quot;。 \t单词中所有字母都不是大写，比如&quot;leetcode&quot;。 \t如果单词不只含有一个字母，只有首字母大写，&nbsp;比如&nbsp;&quot;Google&quot;。   否则，我们定义这个单词没有正确使用大写字母。   示例 1:    输入: &quot;USA&quot; 输出: True   示例 2:    输入: &quot;FlaG&quot; 输出: False   注意: 输入是由大写和小写拉丁字母组成的非空单词。   相关话题  [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/detect-capital/",
        "teaser": null
      },{
        "title": "最长特殊序列 Ⅰ",
        "excerpt":"521. 最长特殊序列 Ⅰ (Easy)   给你两个字符串，请你从这两个字符串中找出最长的特殊序列。   「最长特殊序列」定义如下：该序列为某字符串独有的最长子序列（即不能是其他字符串的子序列）。   子序列 可以通过删去字符串中的某些字符实现，但不能改变剩余字符的相对顺序。空序列为所有字符串的子序列，任何字符串为其自身的子序列。   输入为两个字符串，输出最长特殊序列的长度。如果不存在，则返回 -1。   &nbsp;   示例 1：   输入: &quot;aba&quot;, &quot;cdc&quot; 输出: 3 解释: 最长特殊序列可为 &quot;aba&quot; (或 &quot;cdc&quot;)，两者均为自身的子序列且不是对方的子序列。  示例 2：   输入：a = &quot;aaa&quot;, b = &quot;bbb&quot; 输出：3   示例 3：   输入：a = &quot;aaa&quot;, b = &quot;aaa&quot; 输出：-1   &nbsp;   提示：    \t两个字符串长度均处于区间&nbsp;[1 - 100] 。 \t字符串中的字符仅含有&nbsp;&#39;a&#39;~&#39;z&#39; 。   相关话题  [字符串]   相似题目     最长特殊序列 II (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/longest-uncommon-subsequence-i/",
        "teaser": null
      },{
        "title": "Markdown基础语法",
        "excerpt":"Markdown syntax    Text can be bold, italic, or strikethrough.   Link to another page.   There should be whitespace between paragraphs.   There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.   Header 1   This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.   Header 2      This is a blockquote following a header.     When something is important enough, you do it even if the odds are not in your favor.    Header 3   // Javascript code with syntax highlighting. var fun = function lang(l) {   dateformat.i18n = require('./lang/' + l)   return true; }   # Ruby code with syntax highlighting GitHubPages::Dependencies.gems.each do |gem, version|   s.add_dependency(gem, \"= #{version}\") end   Header 4      This is an unordered list following a header.   This is an unordered list following a header.   This is an unordered list following a header.   Header 5      This is an ordered list following a header.   This is an ordered list following a header.   This is an ordered list following a header.   Header 6                  head1       head two       three                       ok       good swedish fish       nice                 out of stock       good and plenty       nice                 ok       good oreos       hmm                 ok       good zoute drop       yumm           There’s a horizontal rule below this.     Here is an unordered list:      Item foo   Item bar   Item baz   Item zip   And an ordered list:      Item one   Item two   Item three   Item four   And a nested list:      level 1 item            level 2 item       level 2 item                    level 3 item           level 3 item                           level 1 item            level 2 item       level 2 item       level 2 item           level 1 item            level 2 item       level 2 item           level 1 item   Small image      Large image      Definition lists can be used with HTML syntax.    Name Godzilla Born 1952 Birthplace Japan Color Green   Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.   The final element.  ","categories": ["Article"],
        "tags": ["Markdown"],
        "url": "/markdown-syntax/",
        "teaser": null
      },{
        "title": "数组中的 k-diff 数对",
        "excerpt":"532. 数组中的 k-diff 数对 (Medium)   给定一个整数数组和一个整数 k，你需要在数组里找到 不同的 k-diff 数对，并返回不同的 k-diff 数对 的数目。   这里将 k-diff 数对定义为一个整数对 (nums[i], nums[j])，并满足下述全部条件：    \t0 &lt;= i &lt; j &lt; nums.length \t|nums[i] - nums[j]| == k   注意，|val| 表示 val 的绝对值。       示例 1：    输入：nums = [3, 1, 4, 1, 5], k = 2 输出：2 解释：数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。 尽管数组中有两个1，但我们只应返回不同的数对的数量。   示例 2：    输入：nums = [1, 2, 3, 4, 5], k = 1 输出：4 解释：数组中有四个 1-diff 数对, (1, 2), (2, 3), (3, 4) 和 (4, 5)。   示例 3：    输入：nums = [1, 3, 1, 5, 4], k = 0 输出：1 解释：数组中只有一个 0-diff 数对，(1, 1)。   示例 4：    输入：nums = [1,2,4,4,3,3,0,9,2,3], k = 3 输出：2   示例 5：    输入：nums = [-1,-2,-3], k = 1 输出：2       提示：    \t1 &lt;= nums.length &lt;= 104 \t-107 &lt;= nums[i] &lt;= 107 \t0 &lt;= k &lt;= 107   相关话题  [数组]   [哈希表]   [双指针]   [二分查找]   [排序]   相似题目     二叉搜索树的最小绝对差 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table","Two Pointers","Binary Search","Sorting"],
        "url": "/problems/k-diff-pairs-in-an-array/",
        "teaser": null
      },{
        "title": "Go 指南",
        "excerpt":"The Go programming language is an open source project to make programmers more productive.   目录     基础学习   进阶学习   社区论坛   基础学习     官方文档   Go wiki   How to Write Go Code   Package Documentation: The documentation for the Go standard library.   Package builtin   Command Documentation: The documentation for the Go tools.   Language Specification: The official Go Language specification.   Go 文档   Go 指南   在线练习   Go 语言教程 - 菜鸟教程   Go by Example   在线运行 The Go Play Space   进阶学习     GoDoc: Search for Go Packages.   Awesome Go: A curated list of awesome Go frameworks, libraries and software.   Go 语言学习资料与社区索引   Go入门指南   Golang标准库   Go for PHPer   web 开发   Go 语言包管理   XORM: 简单而强大的 Go 语言ORM框架   Go开源项目速查表   社区论坛     Golang 中国: 国内较早的 Go 社区，汇聚各类信息与服务   Study Golang: 国内 Go 社区先驱，同样汇聚各类信息与服务   Revel 交流论坛: Revel 框架的中文社区   Go Forum: Go 语言爱好者英文交流论坛   golang-nuts 邮件列表: Go 语言官方指定邮件列表讨论区   Go+ 社区: Go 语言官方指定 G+ 社区    欢迎各位同学Star、提交Pr、反馈问题。   [阅读原文]  ","categories": ["Guide"],
        "tags": ["Go"],
        "url": "/post-go-guide/",
        "teaser": null
      },{
        "title": "Tools",
        "excerpt":"优秀的在线工具集合，致力于提升工作效率。   目录     文档编辑   在线作图   视频处理   For Coder   优秀App   文档编辑     Google 翻译: Google 的免费翻译服务，可让您即时翻译字词、短语和网页内容。   石墨文档: 可多人实时协作的云端文档与表格   ShowDoc: 一个非常适合IT团队的在线API文档、技术文档工具   在线作图     ProcessOn: ProcessOn是一个在线作图工具的聚合平台。   百度脑图: 百度脑图，便捷的脑图编辑工具。   视频处理     视频播放（VIP）: 视频在线播放。   Coder     TIOBE: The Software Quality Company.   IEEE Spectrum: IEEE Spectrum: Technology, Engineering, and Science News.   Open Hub: Open Hub, the open source network.   Git Awards: Discover your ranking on GitHub.   Code School: The interactive learning destination for aspiring and experienced developers.   LeetCode: Level up your coding skills and quickly land a job. This is the best place to expand your knowledge and get prepared for your next interview.   HackerRank: Practice coding.   HackerEarth: Programming Tutorials and Practice Problems.   The Computer Language Benchmarks Game: The Computer Language Benchmarks Game.   Certbot: Automatically enable HTTPS on your website with EFF’s Certbot, deploying Let’s Encrypt certificates.   优秀App     Postman: Developing APIs is hard, Postman makes it easy.   The Omni Group: Developing applications exclusively for Mac, iPad, and iPhone.   Cmder: Portable console emulator for Windows    欢迎各位同学Star、提交Pr、反馈问题。   [阅读原文]  ","categories": ["Guide"],
        "tags": ["Tool"],
        "url": "/post-tools/",
        "teaser": null
      },{
        "title": "如何创建一个自己的 Composer 库",
        "excerpt":"起因  最近在做微信公众号开发，会开发很多小型H5活动，每次开发新的项目都需要下载框架，然后修改一下默认配置，添加一些自定义方法，而这里面微信授权，回调，分享等好多接口都一样，然后就想能一能用composer create-project创建项目时这些都是已经修改好的呢？下面是创建流程：   1、Composer是什么  Composer 是 PHP 的一个依赖管理工具。它允许你申明项目所依赖的代码库，它会在你的项目中为你安装他们。                  具体的见 [简介       Composer](http://docs.phpcomposer.com/00-intro.html)。           2、需要做哪些准备     GitHub 账号  相信每一位程序员都有。   Packagist 账号 这个你就不一定有了。（可以使用GitHub账户授权登录）   3、创建自己的项目  可以先在GitHub上创建一个仓库，然后克隆到本地，接下来就是创建自己的Project。在项目跟目录添加一个composer.json文件，用来描述项目信息，提交到Packagist会检测这个文件。文件内容如下：  {     \"name\": \"your-vendor-name/package-name\",     \"description\": \"A short description of what your package does\",     \"type\": \"project\",     \"license\": \"MIT\",     \"minimum-stability\": \"stable\",     \"require\": {} }  详细见 Creating a composer.json file。   注意这里的type，详细配置见 composer.json 架构。   最后可以用 composer validate  命令验证一下。   修改完后提交到GitHub版本库。   4、在Packagist官网提交你的Package  进入Packagist官网，登录你的账户，点击Submit  填写你提交到GitHub的仓库地址。点击Check，根据提示提交即可。 稍等片刻，你会看到如下界面，然后你就可以使用这个库了。    到这里就结束了吗？NO NO NO，如果你修改代码，它还不能自动更新。   5、Packagist包自动更新     Go to your GitHub repository   Click the “Settings” button   Click “Integrations &amp; services”   Add a “Packagist” service, and configure it with your API token, plus your Packagist username   Check the “Active” box and submit the form   详细见 How to submit packages?   管理你的包版本详见 Managing package versions   6、Last but not least  到这里基本就结束了。一切都好了，但是突然看到Packagist账户头像是默认的，类似下面这样：  作为一个有强迫症的程序员，我很想用自定义的头像。可是Packagist账户设置没有修改头像的选项。 接下来要特别感谢 @overtrue 超哥的帮助  原来Packagist用的是全球公认的头像 Gravatar - 一个属于你自己的全球通用头像 接下来就是注册Gravatar，上传头像绑定自己的邮箱地址。  注册如有遇到国内163邮箱，QQ邮箱提示邮箱地址被屏蔽可以用微软邮箱，翻墙可以用Gmail，注册后可以修改。   Thanks.  ","categories": ["PHP"],
        "tags": ["Composer"],
        "url": "/php/how-to-create-own-composer-library/",
        "teaser": null
      },{
        "title": "反转字符串 II",
        "excerpt":"541. 反转字符串 II (Easy)   给定一个字符串 s 和一个整数 k，从字符串开头算起，每 2k 个字符反转前 k 个字符。    \t如果剩余字符少于 k 个，则将剩余字符全部反转。 \t如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。   &nbsp;   示例 1：    输入：s = \"abcdefg\", k = 2 输出：\"bacdfeg\"   示例 2：    输入：s = \"abcd\", k = 2 输出：\"bacd\"   &nbsp;   提示：    \t1 &lt;= s.length &lt;= 104 \ts 仅由小写英文组成 \t1 &lt;= k &lt;= 104   相关话题  [双指针]   [字符串]   相似题目     反转字符串 (Easy)   反转字符串中的单词 III (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Two Pointers","String"],
        "url": "/problems/reverse-string-ii/",
        "teaser": null
      },{
        "title": "学生出勤记录 I",
        "excerpt":"551. 学生出勤记录 I (Easy)   给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：    \t&#39;A&#39; : Absent，缺勤 \t&#39;L&#39; : Late，迟到 \t&#39;P&#39; : Present，到场   如果一个学生的出勤记录中不超过一个&#39;A&#39;(缺勤)并且不超过两个连续的&#39;L&#39;(迟到),那么这个学生会被奖赏。   你需要根据这个学生的出勤记录判断他是否会被奖赏。   示例 1:   输入: &quot;PPALLP&quot; 输出: True   示例 2:   输入: &quot;PPALLL&quot; 输出: False   相关话题  [字符串]   相似题目     学生出勤记录 II (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/student-attendance-record-i/",
        "teaser": null
      },{
        "title": "反转字符串中的单词 III",
        "excerpt":"557. 反转字符串中的单词 III (Easy)   给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。   &nbsp;   示例：   输入：&quot;Let&#39;s take LeetCode contest&quot; 输出：&quot;s&#39;teL ekat edoCteeL tsetnoc&quot;   &nbsp;   提示：    \t在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。   相关话题  [双指针]   [字符串]   相似题目     反转字符串 II (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Two Pointers","String"],
        "url": "/problems/reverse-words-in-a-string-iii/",
        "teaser": null
      },{
        "title": "数组拆分 I",
        "excerpt":"561. 数组拆分 I (Easy)   给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。   返回该 最大总和 。       示例 1：    输入：nums = [1,4,3,2] 输出：4 解释：所有可能的分法（忽略元素顺序）为： 1. (1, 4), (2, 3) -&gt; min(1, 4) + min(2, 3) = 1 + 2 = 3 2. (1, 3), (2, 4) -&gt; min(1, 3) + min(2, 4) = 1 + 2 = 3 3. (1, 2), (3, 4) -&gt; min(1, 2) + min(3, 4) = 1 + 3 = 4 所以最大总和为 4  示例 2：    输入：nums = [6,2,6,5,1,2] 输出：9 解释：最优的分法为 (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9       提示：    \t1 &lt;= n &lt;= 104 \tnums.length == 2 * n \t-104 &lt;= nums[i] &lt;= 104   相关话题  [贪心]   [数组]   [计数排序]   [排序]     解法  ","categories": ["Leetcode"],
        "tags": ["Greedy","Array","Counting Sort","Sorting"],
        "url": "/problems/array-partition-i/",
        "teaser": null
      },{
        "title": "数组嵌套",
        "excerpt":"565. 数组嵌套 (Medium)   索引从0开始长度为N的数组A，包含0到N - 1的所有整数。找到最大的集合S并返回其大小，其中 S[i] = {A[i], A[A[i]], A[A[A[i]]], ... }且遵守以下的规则。   假设选择索引为i的元素A[i]为S的第一个元素，S的下一个元素应该是A[A[i]]，之后是A[A[A[i]]]... 以此类推，不断添加直到S出现重复的元素。   &nbsp;   示例&nbsp;1:   输入: A = [5,4,0,3,1,6,2] 输出: 4 解释:  A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.  其中一种最长的 S[K]: S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}   &nbsp;   提示：    \tN是[1, 20,000]之间的整数。 \tA中不含有重复的元素。 \tA中的元素大小在[0, N-1]之间。   相关话题  [深度优先搜索]   [数组]   相似题目     嵌套列表权重和 (Medium)   扁平化嵌套列表迭代器 (Medium)   加权嵌套序列和 II (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Depth-First Search","Array"],
        "url": "/problems/array-nesting/",
        "teaser": null
      },{
        "title": "重塑矩阵",
        "excerpt":"566. 重塑矩阵 (Easy)   在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个&nbsp;m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。   给你一个由二维数组 mat 表示的&nbsp;m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。   重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。   如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。   &nbsp;   示例 1：     输入：mat = [[1,2],[3,4]], r = 1, c = 4 输出：[[1,2,3,4]]   示例 2：     输入：mat = [[1,2],[3,4]], r = 2, c = 4 输出：[[1,2],[3,4]]   &nbsp;   提示：    \tm == mat.length \tn == mat[i].length \t1 &lt;= m, n &lt;= 100 \t-1000 &lt;= mat[i][j] &lt;= 1000 \t1 &lt;= r, c &lt;= 300   相关话题  [数组]   [矩阵]   [模拟]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Matrix","Simulation"],
        "url": "/problems/reshape-the-matrix/",
        "teaser": null
      },{
        "title": "最短无序连续子数组",
        "excerpt":"581. 最短无序连续子数组 (Medium)   给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。   请你找出符合题意的 最短 子数组，并输出它的长度。         示例 1：    输入：nums = [2,6,4,8,10,9,15] 输出：5 解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。   示例 2：    输入：nums = [1,2,3,4] 输出：0   示例 3：    输入：nums = [1] 输出：0       提示：    \t1 &lt;= nums.length &lt;= 104 \t-105 &lt;= nums[i] &lt;= 105       进阶：你可以设计一个时间复杂度为 O(n) 的解决方案吗？     相关话题  [栈]   [贪心]   [数组]   [双指针]   [排序]   [单调栈]     解法  ","categories": ["Leetcode"],
        "tags": ["Stack","Greedy","Array","Two Pointers","Sorting","Monotonic Stack"],
        "url": "/problems/shortest-unsorted-continuous-subarray/",
        "teaser": null
      },{
        "title": "大的国家",
        "excerpt":"595. 大的国家 (Easy)   这里有张 World 表    +-----------------+------------+------------+--------------+---------------+ | name            | continent  | area       | population   | gdp           | +-----------------+------------+------------+--------------+---------------+ | Afghanistan     | Asia       | 652230     | 25500100     | 20343000      | | Albania         | Europe     | 28748      | 2831741      | 12960000      | | Algeria         | Africa     | 2381741    | 37100000     | 188681000     | | Andorra         | Europe     | 468        | 78115        | 3712000       | | Angola          | Africa     | 1246700    | 20609294     | 100990000     | +-----------------+------------+------------+--------------+---------------+   如果一个国家的面积超过 300 万平方公里，或者人口超过 2500 万，那么这个国家就是大国家。   编写一个 SQL 查询，输出表中所有大国家的名称、人口和面积。   例如，根据上表，我们应该输出:    +--------------+-------------+--------------+ | name         | population  | area         | +--------------+-------------+--------------+ | Afghanistan  | 25500100    | 652230       | | Algeria      | 37100000    | 2381741      | +--------------+-------------+--------------+   相关话题  [数据库]     解法  ","categories": ["Leetcode"],
        "tags": ["Database"],
        "url": "/problems/big-countries/",
        "teaser": null
      },{
        "title": "种花问题",
        "excerpt":"605. 种花问题 (Easy)   假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。   给你一个整数数组  flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false。       示例 1：    输入：flowerbed = [1,0,0,0,1], n = 1 输出：true   示例 2：    输入：flowerbed = [1,0,0,0,1], n = 2 输出：false       提示：    \t1 &lt;= flowerbed.length &lt;= 2 * 104 \tflowerbed[i] 为 0 或 1 \tflowerbed 中不存在相邻的两朵花 \t0 &lt;= n &lt;= flowerbed.length   相关话题  [贪心]   [数组]   相似题目     提莫攻击 (Easy)   行星碰撞 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Greedy","Array"],
        "url": "/problems/can-place-flowers/",
        "teaser": null
      },{
        "title": "根据二叉树创建字符串",
        "excerpt":"606. 根据二叉树创建字符串 (Easy)   你需要采用前序遍历的方式，将一个二叉树转换成一个由括号和整数组成的字符串。   空节点则用一对空括号 &quot;()&quot; 表示。而且你需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。   示例 1:    输入: 二叉树: [1,2,3,4]        1      /   \\     2     3    /       4       输出: &quot;1(2(4))(3)&quot;  解释: 原本将是&ldquo;1(2(4)())(3())&rdquo;， 在你省略所有不必要的空括号对之后， 它将是&ldquo;1(2(4))(3)&rdquo;。   示例 2:    输入: 二叉树: [1,2,3,null,4]        1      /   \\     2     3      \\         4   输出: &quot;1(2()(4))(3)&quot;  解释: 和第一个示例相似， 除了我们不能省略第一个对括号来中断输入和输出之间的一对一映射关系。   相关话题  [树]   [深度优先搜索]   [字符串]   [二叉树]   相似题目     从字符串生成二叉树 (Medium)   寻找重复的子树 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Tree","Depth-First Search","String","Binary Tree"],
        "url": "/problems/construct-string-from-binary-tree/",
        "teaser": null
      },{
        "title": "合并二叉树",
        "excerpt":"617. 合并二叉树 (Easy)   给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。   你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为&nbsp;NULL 的节点将直接作为新二叉树的节点。   示例&nbsp;1:    输入:  \tTree 1                     Tree 2                             1                         2                                       / \\                       / \\                                     3   2                     1   3                                /                           \\   \\                             5                             4   7                   输出:  合并后的树: \t     3 \t    / \\ \t   4   5 \t  / \\   \\  \t 5   4   7   注意:&nbsp;合并必须从两个树的根节点开始。   相关话题  [树]   [深度优先搜索]   [广度优先搜索]   [二叉树]     解法  ","categories": ["Leetcode"],
        "tags": ["Tree","Depth-First Search","Breadth-First Search","Binary Tree"],
        "url": "/problems/merge-two-binary-trees/",
        "teaser": null
      },{
        "title": "有趣的电影",
        "excerpt":"620. 有趣的电影 (Easy)   某城市开了一家新的电影院，吸引了很多人过来看电影。该电影院特别注意用户体验，专门有个 LED显示板做电影推荐，上面公布着影评和相关电影描述。   作为该电影院的信息部主管，您需要编写一个 SQL查询，找出所有影片描述为非&nbsp;boring&nbsp;(不无聊)&nbsp;的并且 id 为奇数&nbsp;的影片，结果请按等级 rating 排列。   &nbsp;   例如，下表 cinema:    +---------+-----------+--------------+-----------+ |   id    | movie     |  description |  rating   | +---------+-----------+--------------+-----------+ |   1     | War       |   great 3D   |   8.9     | |   2     | Science   |   fiction    |   8.5     | |   3     | irish     |   boring     |   6.2     | |   4     | Ice song  |   Fantacy    |   8.6     | |   5     | House card|   Interesting|   9.1     | +---------+-----------+--------------+-----------+   对于上面的例子，则正确的输出是为：    +---------+-----------+--------------+-----------+ |   id    | movie     |  description |  rating   | +---------+-----------+--------------+-----------+ |   5     | House card|   Interesting|   9.1     | |   1     | War       |   great 3D   |   8.9     | +---------+-----------+--------------+-----------+   &nbsp;   相关话题  [数据库]     解法  ","categories": ["Leetcode"],
        "tags": ["Database"],
        "url": "/problems/not-boring-movies/",
        "teaser": null
      },{
        "title": "换座位",
        "excerpt":"626. 换座位 (Medium)   小美是一所中学的信息科技老师，她有一张 seat&nbsp;座位表，平时用来储存学生名字和与他们相对应的座位 id。   其中纵列的&nbsp;id&nbsp;是连续递增的   小美想改变相邻俩学生的座位。   你能不能帮她写一个 SQL query&nbsp;来输出小美想要的结果呢？   &nbsp;   示例：    +---------+---------+ |    id   | student | +---------+---------+ |    1    | Abbot   | |    2    | Doris   | |    3    | Emerson | |    4    | Green   | |    5    | Jeames  | +---------+---------+   假如数据输入的是上表，则输出结果如下：    +---------+---------+ |    id   | student | +---------+---------+ |    1    | Doris   | |    2    | Abbot   | |    3    | Green   | |    4    | Emerson | |    5    | Jeames  | +---------+---------+  注意：   如果学生人数是奇数，则不需要改变最后一个同学的座位。   相关话题  [数据库]     解法  ","categories": ["Leetcode"],
        "tags": ["Database"],
        "url": "/problems/exchange-seats/",
        "teaser": null
      },{
        "title": "变更性别",
        "excerpt":"627. 变更性别 (Easy)     Salary 表：    +-------------+----------+ | Column Name | Type     | +-------------+----------+ | id          | int      | | name        | varchar  | | sex         | ENUM     | | salary      | int      | +-------------+----------+ id 是这个表的主键。 sex 这一列的值是 ENUM 类型，只能从 ('m', 'f') 中取。 本表包含公司雇员的信息。   &nbsp;   请你编写一个 SQL 查询来交换所有的 'f' 和 'm' （即，将所有 'f' 变为 'm' ，反之亦然），仅使用 单个 update 语句 ，且不产生中间临时表。   注意，你必须仅使用一条 update 语句，且 不能 使用 select 语句。   查询结果如下例所示：   &nbsp;    Salary 表： +----+------+-----+--------+ | id | name | sex | salary | +----+------+-----+--------+ | 1  | A    | m   | 2500   | | 2  | B    | f   | 1500   | | 3  | C    | m   | 5500   | | 4  | D    | f   | 500    | +----+------+-----+--------+  Result 表： +----+------+-----+--------+ | id | name | sex | salary | +----+------+-----+--------+ | 1  | A    | f   | 2500   | | 2  | B    | m   | 1500   | | 3  | C    | f   | 5500   | | 4  | D    | m   | 500    | +----+------+-----+--------+ (1, A) 和 (3, C) 从 'm' 变为 'f' 。 (2, B) 和 (4, D) 从 'f' 变为 'm' 。     相关话题  [数据库]     解法  ","categories": ["Leetcode"],
        "tags": ["Database"],
        "url": "/problems/swap-salary/",
        "teaser": null
      },{
        "title": "三个数的最大乘积",
        "excerpt":"628. 三个数的最大乘积 (Easy)   给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。       示例 1：    输入：nums = [1,2,3] 输出：6   示例 2：    输入：nums = [1,2,3,4] 输出：24   示例 3：    输入：nums = [-1,-2,-3] 输出：-6       提示：    \t3 &lt;= nums.length &lt;= 104 \t-1000 &lt;= nums[i] &lt;= 1000   相关话题  [数组]   [数学]   [排序]   相似题目     乘积最大子数组 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Math","Sorting"],
        "url": "/problems/maximum-product-of-three-numbers/",
        "teaser": null
      },{
        "title": "子数组最大平均数 I",
        "excerpt":"643. 子数组最大平均数 I (Easy)   给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。   请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。   任何误差小于 10-5 的答案都将被视为正确答案。   &nbsp;   示例 1：    输入：nums = [1,12,-5,-6,50,3], k = 4 输出：12.75 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75   示例 2：    输入：nums = [5], k = 1 输出：5.00000   &nbsp;   提示：    \tn == nums.length \t1 &lt;= k &lt;= n &lt;= 105 \t-104 &lt;= nums[i] &lt;= 104   相关话题  [数组]   [滑动窗口]   相似题目     子数组最大平均数 II (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Sliding Window"],
        "url": "/problems/maximum-average-subarray-i/",
        "teaser": null
      },{
        "title": "机器人能否返回原点",
        "excerpt":"657. 机器人能否返回原点 (Easy)   在二维平面上，有一个机器人从原点 (0, 0) 开始。给出它的移动顺序，判断这个机器人在完成移动后是否在&nbsp;(0, 0) 处结束。   移动顺序由字符串表示。字符 move[i] 表示其第 i 次移动。机器人的有效动作有&nbsp;R（右），L（左），U（上）和 D（下）。如果机器人在完成所有动作后返回原点，则返回 true。否则，返回 false。   注意：机器人&ldquo;面朝&rdquo;的方向无关紧要。 &ldquo;R&rdquo; 将始终使机器人向右移动一次，&ldquo;L&rdquo; 将始终向左移动等。此外，假设每次移动机器人的移动幅度相同。   &nbsp;   示例 1:   输入: &quot;UD&quot; 输出: true 解释：机器人向上移动一次，然后向下移动一次。所有动作都具有相同的幅度，因此它最终回到它开始的原点。因此，我们返回 true。  示例 2:   输入: &quot;LL&quot; 输出: false 解释：机器人向左移动两次。它最终位于原点的左侧，距原点有两次 &ldquo;移动&rdquo; 的距离。我们返回 false，因为它在移动结束时没有返回原点。  相关话题  [字符串]   [模拟]   相似题目     省份数量 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["String","Simulation"],
        "url": "/problems/robot-return-to-origin/",
        "teaser": null
      },{
        "title": "图片平滑器",
        "excerpt":"661. 图片平滑器 (Easy)   包含整数的二维矩阵 M 表示一个图片的灰度。你需要设计一个平滑器来让每一个单元的灰度成为平均灰度&nbsp;(向下舍入) ，平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，则尽可能多的利用它们。   示例 1:    输入: [[1,1,1],  [1,0,1],  [1,1,1]] 输出: [[0, 0, 0],  [0, 0, 0],  [0, 0, 0]] 解释: 对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0 对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0 对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0   注意:    \t给定矩阵中的整数范围为 [0, 255]。 \t矩阵的长和宽的范围均为&nbsp;[1, 150]。   相关话题  [数组]   [矩阵]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Matrix"],
        "url": "/problems/image-smoother/",
        "teaser": null
      },{
        "title": "非递减数列",
        "excerpt":"665. 非递减数列 (Medium)   给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。   我们是这样定义一个非递减数列的： 对于数组中任意的 i (0 &lt;= i &lt;= n-2)，总满足 nums[i] &lt;= nums[i + 1]。       示例 1:    输入: nums = [4,2,3] 输出: true 解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。   示例 2:    输入: nums = [4,2,1] 输出: false 解释: 你不能在只改变一个元素的情况下将其变为非递减数列。       提示：    \t1 &lt;= n &lt;= 10 ^ 4 \t- 10 ^ 5 &lt;= nums[i] &lt;= 10 ^ 5   相关话题  [数组]     解法  ","categories": ["Leetcode"],
        "tags": ["Array"],
        "url": "/problems/non-decreasing-array/",
        "teaser": null
      },{
        "title": "Mac下用brew搭建PHP开发环境",
        "excerpt":"搭建过程     安装 Homebrew   $ brew search php （非必要）   $ brew options php71 （非必要）   $ brew install homebrew/php/php71 --with-httpd Apache环境   $ brew install mysql   $ brew install homebrew/php/php71-xdebug 安装扩展（非必要）   which apachectl 或 which httpd 查询httpd位置（非必要）   apachectl -V 或 httpd -V 查看Apache配置文件位置（非必要）   php -m 查询已安装模块（非必要）   php --ini 查询php.ini文件（非必要）   $ brew services list  详细使用运行brew services可以查看帮助（非必要）   $ sudo brew services run httpd 需要root权限（80，443端口需要）   $ brew services run mysql   一、安装 Homebrew     Homebrew是macOS 缺失的软件包管理器。安装过程也非常简单：    $ /usr/bin/ruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\"       将以上命令粘贴至终端。脚本会在执行前暂停，并说明将它将做什么。    二、环境搭建（简洁方式）  $ brew search php   查询可用的formula，注意以下几个：  homebrew/php/php56 homebrew/php/php70 homebrew/php/php71 homebrew/php/php72   PHP后面的数字代表PHP版本，homebrew/php/php72-redis 类似这样的是PHP版本对用的扩展。 默认是不会安装Apache Handler module，可以使用 --with-httpd 参数。   安装mysql，php扩展方法一样。   三、遇到问题及处理方式（重点）   安装模块不可用   原因1: 线程安全和非线程安全   brew reinstall -fs php71-mcrypt  重新安装线程安全模块   运行 brew install 可以添加 --interactive 参数，解释如下  $ brew help install brew install --interactive [--git] formula:     If --interactive (or -i) is passed, download and patch formula, then     open a shell. This allows the user to run ./configure --help and     otherwise determine how to turn the software package into a Homebrew     formula.      If --git (or -g) is passed, Homebrew will create a Git repository, useful for     creating patches to the software.   原因2: 模块不可用  PHP Warning:  PHP Startup: Unable to load dynamic library '/usr/local/opt/php71-redis/redis.so' - dlopen(/usr/local/opt/php71-redis/redis.so, 9): Symbol not found: _basic_globals   Referenced from: /usr/local/opt/php71-redis/redis.so   Expected in: flat namespace  in /usr/local/opt/php71-redis/redis.so in Unknown on line 0  Warning: PHP Startup: Unable to load dynamic library '/usr/local/opt/php71-redis/redis.so' - dlopen(/usr/local/opt/php71-redis/redis.so, 9): Symbol not found: _basic_globals   Referenced from: /usr/local/opt/php71-redis/redis.so   Expected in: flat namespace  in /usr/local/opt/php71-redis/redis.so in Unknown on line 0   解决方法：添加 --build-from-source (or -s)  参数   例如： brew reinstall --build-from-source php71-redis   Thanks.  ","categories": ["PHP"],
        "tags": ["Mac"],
        "url": "/php/using-brew-to-build-php-development-environment-under-mac/",
        "teaser": null
      },{
        "title": "最长连续递增序列",
        "excerpt":"674. 最长连续递增序列 (Easy)   给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。   连续递增的子序列 可以由两个下标 l 和 r（l &lt; r）确定，如果对于每个 l &lt;= i &lt; r，都有 nums[i] &lt; nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。       示例 1：    输入：nums = [1,3,5,4,7] 输出：3 解释：最长连续递增序列是 [1,3,5], 长度为3。 尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。    示例 2：    输入：nums = [2,2,2,2,2] 输出：1 解释：最长连续递增序列是 [2], 长度为1。       提示：    \t1 &lt;= nums.length &lt;= 104 \t-109 &lt;= nums[i] &lt;= 109   相关话题  [数组]   相似题目     最长递增子序列的个数 (Medium)   最小窗口子序列 (Hard)     解法  ","categories": ["Leetcode"],
        "tags": ["Array"],
        "url": "/problems/longest-continuous-increasing-subsequence/",
        "teaser": null
      },{
        "title": "24 点游戏",
        "excerpt":"679. 24 点游戏 (Hard)   你有 4 张写有 1 到 9 数字的牌。你需要判断是否能通过&nbsp;*，/，+，-，(，)&nbsp;的运算得到 24。   示例 1:   输入: [4, 1, 8, 7] 输出: True 解释: (8-4) * (7-1) = 24   示例 2:   输入: [1, 2, 1, 2] 输出: False   注意:    \t除法运算符&nbsp;/&nbsp;表示实数除法，而不是整数除法。例如 4 / (1 - 2/3) = 12 。 \t每个运算符对两个数进行运算。特别是我们不能用&nbsp;-&nbsp;作为一元运算符。例如，[1, 1, 1, 1]&nbsp;作为输入时，表达式&nbsp;-1 - 1 - 1 - 1&nbsp;是不允许的。 \t你不能将数字连接在一起。例如，输入为&nbsp;[1, 2, 1, 2]&nbsp;时，不能写成 12 + 12 。   相关话题  [数组]   [数学]   [回溯]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Math","Backtracking"],
        "url": "/problems/24-game/",
        "teaser": null
      },{
        "title": "验证回文字符串 Ⅱ",
        "excerpt":"680. 验证回文字符串 Ⅱ (Easy)   给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。       示例 1:    输入: s = \"aba\" 输出: true   示例 2:    输入: s = \"abca\" 输出: true 解释: 你可以删除c字符。   示例 3:    输入: s = \"abc\" 输出: false      提示:    \t1 &lt;= s.length &lt;= 105 \ts 由小写英文字母组成   相关话题  [贪心]   [双指针]   [字符串]   相似题目     验证回文串 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Greedy","Two Pointers","String"],
        "url": "/problems/valid-palindrome-ii/",
        "teaser": null
      },{
        "title": "重复叠加字符串匹配",
        "excerpt":"686. 重复叠加字符串匹配 (Medium)   给定两个字符串&nbsp;a 和 b，寻找重复叠加字符串 a 的最小次数，使得字符串 b 成为叠加后的字符串 a 的子串，如果不存在则返回 -1。   注意：字符串 &quot;abc&quot;&nbsp;重复叠加 0 次是 &quot;&quot;，重复叠加 1 次是&nbsp;&quot;abc&quot;，重复叠加 2 次是&nbsp;&quot;abcabc&quot;。   &nbsp;   示例 1：   输入：a = &quot;abcd&quot;, b = &quot;cdabcdab&quot; 输出：3 解释：a 重复叠加三遍后为 &quot;abcdabcdabcd&quot;, 此时 b 是其子串。   示例 2：   输入：a = &quot;a&quot;, b = &quot;aa&quot; 输出：2   示例 3：   输入：a = &quot;a&quot;, b = &quot;a&quot; 输出：1   示例 4：   输入：a = &quot;abc&quot;, b = &quot;wxyz&quot; 输出：-1   &nbsp;   提示：    \t1 &lt;= a.length &lt;= 104 \t1 &lt;= b.length &lt;= 104 \ta 和 b 由小写英文字母组成   相关话题  [字符串]   [字符串匹配]   相似题目     重复的子字符串 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["String","String Matching"],
        "url": "/problems/repeated-string-match/",
        "teaser": null
      },{
        "title": "计数二进制子串",
        "excerpt":"696. 计数二进制子串 (Easy)   给定一个字符串 s，计算具有相同数量 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是连续的。   重复出现的子串要计算它们出现的次数。       示例 1 :    输入: \"00110011\" 输出: 6 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。  请注意，一些重复出现的子串要计算它们出现的次数。  另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。   示例 2 :    输入: \"10101\" 输出: 4 解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。       提示：    \ts.length 在1到50,000之间。 \ts 只包含“0”或“1”字符。   相关话题  [双指针]   [字符串]   相似题目     字符串的编码与解码 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Two Pointers","String"],
        "url": "/problems/count-binary-substrings/",
        "teaser": null
      },{
        "title": "数组的度",
        "excerpt":"697. 数组的度 (Easy)   给定一个非空且只包含非负数的整数数组 nums，数组的度的定义是指数组里任一元素出现频数的最大值。   你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。       示例 1：    输入：[1, 2, 2, 3, 1] 输出：2 解释： 输入数组的度是2，因为元素1和2的出现频数最大，均为2. 连续子数组里面拥有相同度的有如下所示: [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2] 最短连续子数组[2, 2]的长度为2，所以返回2.   示例 2：    输入：[1,2,2,3,1,4,2] 输出：6       提示：    \tnums.length 在1到 50,000 区间范围内。 \tnums[i] 是一个在 0 到 49,999 范围内的整数。   相关话题  [数组]   [哈希表]   相似题目     最大子序和 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table"],
        "url": "/problems/degree-of-an-array/",
        "teaser": null
      },{
        "title": "设计哈希集合",
        "excerpt":"705. 设计哈希集合 (Easy)   不使用任何内建的哈希表库设计一个哈希集合（HashSet）。   实现 MyHashSet 类：    \tvoid add(key) 向哈希集合中插入值 key 。 \tbool contains(key) 返回哈希集合中是否存在这个值 key 。 \tvoid remove(key) 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。      示例：    输入： [\"MyHashSet\", \"add\", \"add\", \"contains\", \"contains\", \"add\", \"contains\", \"remove\", \"contains\"] [[], [1], [2], [1], [3], [2], [2], [2], [2]] 输出： [null, null, null, true, false, null, true, null, false]  解释： MyHashSet myHashSet = new MyHashSet(); myHashSet.add(1);      // set = [1] myHashSet.add(2);      // set = [1, 2] myHashSet.contains(1); // 返回 True myHashSet.contains(3); // 返回 False ，（未找到） myHashSet.add(2);      // set = [1, 2] myHashSet.contains(2); // 返回 True myHashSet.remove(2);   // set = [1] myHashSet.contains(2); // 返回 False ，（已移除）      提示：    \t0 &lt;= key &lt;= 106 \t最多调用 104 次 add、remove 和 contains 。       进阶：你可以不使用内建的哈希集合库解决此问题吗？   相关话题  [设计]   [数组]   [哈希表]   [链表]   [哈希函数]   相似题目     设计哈希映射 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Design","Array","Hash Table","Linked List","Hash Function"],
        "url": "/problems/design-hashset/",
        "teaser": null
      },{
        "title": "设计哈希映射",
        "excerpt":"706. 设计哈希映射 (Easy)   不使用任何内建的哈希表库设计一个哈希映射（HashMap）。   实现 MyHashMap 类：    \tMyHashMap() 用空映射初始化对象 \tvoid put(int key, int value) 向 HashMap 插入一个键值对 (key, value) 。如果 key 已经存在于映射中，则更新其对应的值 value 。 \tint get(int key) 返回特定的 key 所映射的 value ；如果映射中不包含 key 的映射，返回 -1 。 \tvoid remove(key) 如果映射中存在 key 的映射，则移除 key 和它所对应的 value 。       示例：    输入： [\"MyHashMap\", \"put\", \"put\", \"get\", \"get\", \"put\", \"get\", \"remove\", \"get\"] [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]] 输出： [null, null, null, 1, -1, null, 1, null, -1]  解释： MyHashMap myHashMap = new MyHashMap(); myHashMap.put(1, 1); // myHashMap 现在为 [[1,1]] myHashMap.put(2, 2); // myHashMap 现在为 [[1,1], [2,2]] myHashMap.get(1);    // 返回 1 ，myHashMap 现在为 [[1,1], [2,2]] myHashMap.get(3);    // 返回 -1（未找到），myHashMap 现在为 [[1,1], [2,2]] myHashMap.put(2, 1); // myHashMap 现在为 [[1,1], [2,1]]（更新已有的值） myHashMap.get(2);    // 返回 1 ，myHashMap 现在为 [[1,1], [2,1]] myHashMap.remove(2); // 删除键为 2 的数据，myHashMap 现在为 [[1,1]] myHashMap.get(2);    // 返回 -1（未找到），myHashMap 现在为 [[1,1]]       提示：    \t0 &lt;= key, value &lt;= 106 \t最多调用 104 次 put、get 和 remove 方法       进阶：你能否不使用内置的 HashMap 库解决此问题？   相关话题  [设计]   [数组]   [哈希表]   [链表]   [哈希函数]   相似题目     设计哈希集合 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Design","Array","Hash Table","Linked List","Hash Function"],
        "url": "/problems/design-hashmap/",
        "teaser": null
      },{
        "title": "转换成小写字母",
        "excerpt":"709. 转换成小写字母 (Easy)   给你一个字符串 s ，将该字符串中的大写字母转换成相同的小写字母，返回新的字符串。       示例 1：    输入：s = \"Hello\" 输出：\"hello\"   示例 2：    输入：s = \"here\" 输出：\"here\"   示例 3：    输入：s = \"LOVELY\" 输出：\"lovely\"       提示：    \t1 &lt;= s.length &lt;= 100 \ts 由 ASCII 字符集中的可打印字符组成   相关话题  [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/to-lower-case/",
        "teaser": null
      },{
        "title": "1比特与2比特字符",
        "excerpt":"717. 1比特与2比特字符 (Easy)   有两种特殊字符。第一种字符可以用一比特0来表示。第二种字符可以用两比特(10&nbsp;或&nbsp;11)来表示。   现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。   示例&nbsp;1:    输入:  bits = [1, 0, 0] 输出: True 解释:  唯一的编码方式是一个两比特字符和一个一比特字符。所以最后一个字符是一比特字符。   示例&nbsp;2:    输入:  bits = [1, 1, 1, 0] 输出: False 解释:  唯一的编码方式是两比特字符和两比特字符。所以最后一个字符不是一比特字符。   注意:    \t1 &lt;= len(bits) &lt;= 1000. \tbits[i] 总是0 或&nbsp;1.   相关话题  [数组]   相似题目     格雷编码 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array"],
        "url": "/problems/1-bit-and-2-bit-characters/",
        "teaser": null
      },{
        "title": "寻找数组的中心下标",
        "excerpt":"724. 寻找数组的中心下标 (Easy)   给你一个整数数组 nums ，请计算数组的 中心下标 。   数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。   如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。   如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。       示例 1：    输入：nums = [1, 7, 3, 6, 5, 6] 输出：3 解释： 中心下标是 3 。 左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ， 右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。   示例 2：    输入：nums = [1, 2, 3] 输出：-1 解释： 数组中不存在满足此条件的中心下标。  示例 3：    输入：nums = [2, 1, -1] 输出：0 解释： 中心下标是 0 。 左侧数之和 sum = 0 ，（下标 0 左侧不存在元素）， 右侧数之和 sum = nums[1] + nums[2] = 1 + -1 = 0 。      提示：    \t1 &lt;= nums.length &lt;= 104 \t-1000 &lt;= nums[i] &lt;= 1000   相关话题  [数组]   [前缀和]   相似题目     和为K的子数组 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Prefix Sum"],
        "url": "/problems/find-pivot-index/",
        "teaser": null
      },{
        "title": "自除数",
        "excerpt":"728. 自除数 (Easy)   自除数&nbsp;是指可以被它包含的每一位数除尽的数。   例如，128 是一个自除数，因为&nbsp;128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。   还有，自除数不允许包含 0 。   给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。   示例 1：    输入：  上边界left = 1, 下边界right = 22 输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]   注意：    \t每个输入参数的边界满足&nbsp;1 &lt;= left &lt;= right &lt;= 10000。   相关话题  [数学]   相似题目     完美数 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Math"],
        "url": "/problems/self-dividing-numbers/",
        "teaser": null
      },{
        "title": "寻找比目标字母大的最小字母",
        "excerpt":"744. 寻找比目标字母大的最小字母 (Easy)   给你一个排序后的字符列表 letters ，列表中只包含小写英文字母。另给出一个目标字母&nbsp;target，请你寻找在这一有序列表里比目标字母大的最小字母。   在比较时，字母是依序循环出现的。举个例子：    \t如果目标字母 target = &#39;z&#39; 并且字符列表为&nbsp;letters = [&#39;a&#39;, &#39;b&#39;]，则答案返回&nbsp;&#39;a&#39;   &nbsp;   示例：   输入: letters = [&quot;c&quot;, &quot;f&quot;, &quot;j&quot;] target = &quot;a&quot; 输出: &quot;c&quot;  输入: letters = [&quot;c&quot;, &quot;f&quot;, &quot;j&quot;] target = &quot;c&quot; 输出: &quot;f&quot;  输入: letters = [&quot;c&quot;, &quot;f&quot;, &quot;j&quot;] target = &quot;d&quot; 输出: &quot;f&quot;  输入: letters = [&quot;c&quot;, &quot;f&quot;, &quot;j&quot;] target = &quot;g&quot; 输出: &quot;j&quot;  输入: letters = [&quot;c&quot;, &quot;f&quot;, &quot;j&quot;] target = &quot;j&quot; 输出: &quot;c&quot;  输入: letters = [&quot;c&quot;, &quot;f&quot;, &quot;j&quot;] target = &quot;k&quot; 输出: &quot;c&quot;   &nbsp;   提示：    \tletters长度范围在[2, 10000]区间内。 \tletters 仅由小写字母组成，最少包含两个不同的字母。 \t目标字母target 是一个小写字母。   相关话题  [数组]   [二分查找]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Binary Search"],
        "url": "/problems/find-smallest-letter-greater-than-target/",
        "teaser": null
      },{
        "title": "使用最小花费爬楼梯",
        "excerpt":"746. 使用最小花费爬楼梯 (Easy)   数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。   每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。   请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。       示例 1：    输入：cost = [10, 15, 20] 输出：15 解释：最低花费是从 cost[1] 开始，然后走两步即可到阶梯顶，一共花费 15 。    示例 2：    输入：cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1] 输出：6 解释：最低花费方式是从 cost[0] 开始，逐个经过那些 1 ，跳过 cost[3] ，一共花费 6 。       提示：    \tcost 的长度范围是 [2, 1000]。 \tcost[i] 将会是一个整型数据，范围为 [0, 999] 。   相关话题  [数组]   [动态规划]   相似题目     爬楼梯 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Dynamic Programming"],
        "url": "/problems/min-cost-climbing-stairs/",
        "teaser": null
      },{
        "title": "至少是其他数字两倍的最大数",
        "excerpt":"747. 至少是其他数字两倍的最大数 (Easy)   给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。   请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 -1 。       示例 1：    输入：nums = [3,6,1,0] 输出：1 解释：6 是最大的整数，对于数组中的其他整数，6 大于数组中其他元素的两倍。6 的下标是 1 ，所以返回 1 。   示例 2：    输入：nums = [1,2,3,4] 输出：-1 解释：4 没有超过 3 的两倍大，所以返回 -1 。  示例 3：    输入：nums = [1] 输出：0 解释：因为不存在其他数字，所以认为现有数字 1 至少是其他数字的两倍。       提示：    \t1 &lt;= nums.length &lt;= 50 \t0 &lt;= nums[i] &lt;= 100 \tnums 中的最大元素是唯一的   相关话题  [数组]   [排序]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Sorting"],
        "url": "/problems/largest-number-at-least-twice-of-others/",
        "teaser": null
      },{
        "title": "托普利茨矩阵",
        "excerpt":"766. 托普利茨矩阵 (Easy)   给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。   如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。       示例 1：     输入：matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]] 输出：true 解释： 在上述矩阵中, 其对角线为:  \"[9]\", \"[5, 5]\", \"[1, 1, 1]\", \"[2, 2, 2]\", \"[3, 3]\", \"[4]\"。  各条对角线上的所有元素均相同, 因此答案是 True 。   示例 2：     输入：matrix = [[1,2],[2,2]] 输出：false 解释： 对角线 \"[1, 2]\" 上的元素不同。      提示：    \tm == matrix.length \tn == matrix[i].length \t1 &lt;= m, n &lt;= 20 \t0 &lt;= matrix[i][j] &lt;= 99       进阶：    \t如果矩阵存储在磁盘上，并且内存有限，以至于一次最多只能将矩阵的一行加载到内存中，该怎么办？ \t如果矩阵太大，以至于一次只能将不完整的一行加载到内存中，该怎么办？   相关话题  [数组]   [矩阵]   相似题目     有效的单词方块 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Matrix"],
        "url": "/problems/toeplitz-matrix/",
        "teaser": null
      },{
        "title": "宝石与石头",
        "excerpt":"771. 宝石与石头 (Easy)   &nbsp;给定字符串J&nbsp;代表石头中宝石的类型，和字符串&nbsp;S代表你拥有的石头。&nbsp;S&nbsp;中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。   J&nbsp;中的字母不重复，J&nbsp;和&nbsp;S中的所有字符都是字母。字母区分大小写，因此&quot;a&quot;和&quot;A&quot;是不同类型的石头。   示例 1:   输入: J = &quot;aA&quot;, S = &quot;aAAbbbb&quot; 输出: 3   示例 2:   输入: J = &quot;z&quot;, S = &quot;ZZ&quot; 输出: 0   注意:    \tS&nbsp;和&nbsp;J&nbsp;最多含有50个字母。 \t&nbsp;J&nbsp;中的字符不重复。   相关话题  [哈希表]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","String"],
        "url": "/problems/jewels-and-stones/",
        "teaser": null
      },{
        "title": "旋转数字",
        "excerpt":"788. 旋转数字 (Medium)   我们称一个数 X 为好数, 如果它的每位数字逐个地被旋转 180 度后，我们仍可以得到一个有效的，且和 X 不同的数。要求每位数字都要被旋转。   如果一个数的每位数字被旋转以后仍然还是一个数字，&nbsp;则这个数是有效的。0, 1, 和 8 被旋转后仍然是它们自己；2 和 5 可以互相旋转成对方（在这种情况下，它们以不同的方向旋转，换句话说，2 和 5 互为镜像）；6 和 9 同理，除了这些以外其他的数字旋转以后都不再是有效的数字。   现在我们有一个正整数&nbsp;N, 计算从&nbsp;1 到&nbsp;N 中有多少个数&nbsp;X 是好数？   &nbsp;   示例：   输入: 10 输出: 4 解释:  在[1, 10]中有四个好数： 2, 5, 6, 9。 注意 1 和 10 不是好数, 因为他们在旋转之后不变。   &nbsp;   提示：    \tN&nbsp;的取值范围是&nbsp;[1, 10000]。   相关话题  [数学]   [动态规划]     解法  ","categories": ["Leetcode"],
        "tags": ["Math","Dynamic Programming"],
        "url": "/problems/rotated-digits/",
        "teaser": null
      },{
        "title": "阶乘函数后 K 个零",
        "excerpt":"793. 阶乘函数后 K 个零 (Hard)    f(x) 是 x! 末尾是 0 的数量。（回想一下 x! = 1 * 2 * 3 * ... * x，且 0! = 1 ）   例如， f(3) = 0 ，因为 3! = 6 的末尾没有 0 ；而 f(11) = 2 ，因为 11!= 39916800 末端有 2 个 0 。给定 K，找出多少个非负整数 x ，能满足 f(x) = K 。       示例 1：     输入：K = 0 输出：5 解释：0!, 1!, 2!, 3!, and 4! 均符合 K = 0 的条件。   示例 2：    输入：K = 5 输出：0 解释：没有匹配到这样的 x!，符合 K = 5 的条件。      提示：    \t \tK 是范围在 [0, 10^9] 的整数。  \t   相关话题  [数学]   [二分查找]   相似题目     阶乘后的零 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Math","Binary Search"],
        "url": "/problems/preimage-size-of-factorial-zeroes-function/",
        "teaser": null
      },{
        "title": "旋转字符串",
        "excerpt":"796. 旋转字符串 (Easy)   给定两个字符串, A&nbsp;和&nbsp;B。   A&nbsp;的旋转操作就是将&nbsp;A 最左边的字符移动到最右边。&nbsp;例如, 若&nbsp;A = &#39;abcde&#39;，在移动一次之后结果就是&#39;bcdea&#39;&nbsp;。如果在若干次旋转操作之后，A&nbsp;能变成B，那么返回True。    示例 1: 输入: A = &#39;abcde&#39;, B = &#39;cdeab&#39; 输出: true  示例 2: 输入: A = &#39;abcde&#39;, B = &#39;abced&#39; 输出: false  注意：    \tA 和&nbsp;B&nbsp;长度不超过&nbsp;100。   相关话题  [字符串]   [字符串匹配]     解法  ","categories": ["Leetcode"],
        "tags": ["String","String Matching"],
        "url": "/problems/rotate-string/",
        "teaser": null
      },{
        "title": "唯一摩尔斯密码词",
        "excerpt":"804. 唯一摩尔斯密码词 (Easy)   国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串，&nbsp;比如: &quot;a&quot; 对应 &quot;.-&quot;, &quot;b&quot; 对应 &quot;-...&quot;, &quot;c&quot; 对应 &quot;-.-.&quot;, 等等。   为了方便，所有26个英文字母对应摩尔斯密码表如下：   [&quot;.-&quot;,&quot;-...&quot;,&quot;-.-.&quot;,&quot;-..&quot;,&quot;.&quot;,&quot;..-.&quot;,&quot;--.&quot;,&quot;....&quot;,&quot;..&quot;,&quot;.---&quot;,&quot;-.-&quot;,&quot;.-..&quot;,&quot;--&quot;,&quot;-.&quot;,&quot;---&quot;,&quot;.--.&quot;,&quot;--.-&quot;,&quot;.-.&quot;,&quot;...&quot;,&quot;-&quot;,&quot;..-&quot;,&quot;...-&quot;,&quot;.--&quot;,&quot;-..-&quot;,&quot;-.--&quot;,&quot;--..&quot;]  给定一个单词列表，每个单词可以写成每个字母对应摩尔斯密码的组合。例如，&quot;cab&quot; 可以写成 &quot;-.-..--...&quot;，(即 &quot;-.-.&quot; + &quot;.-&quot; + &quot;-...&quot; 字符串的结合)。我们将这样一个连接过程称作单词翻译。   返回我们可以获得所有词不同单词翻译的数量。   例如: 输入: words = [&quot;gin&quot;, &quot;zen&quot;, &quot;gig&quot;, &quot;msg&quot;] 输出: 2 解释:  各单词翻译如下: &quot;gin&quot; -&gt; &quot;--...-.&quot; &quot;zen&quot; -&gt; &quot;--...-.&quot; &quot;gig&quot; -&gt; &quot;--...--.&quot; &quot;msg&quot; -&gt; &quot;--...--.&quot;  共有 2 种不同翻译, &quot;--...-.&quot; 和 &quot;--...--.&quot;.   &nbsp;   注意:    \t单词列表words&nbsp;的长度不会超过 100。 \t每个单词&nbsp;words[i]的长度范围为&nbsp;[1, 12]。 \t每个单词&nbsp;words[i]只包含小写字母。   相关话题  [数组]   [哈希表]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table","String"],
        "url": "/problems/unique-morse-code-words/",
        "teaser": null
      },{
        "title": "最常见的单词",
        "excerpt":"819. 最常见的单词 (Easy)   给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。   题目保证至少有一个词不在禁用列表中，而且答案唯一。   禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。   &nbsp;   示例：   输入:  paragraph = &quot;Bob hit a ball, the hit BALL flew far after it was hit.&quot; banned = [&quot;hit&quot;] 输出: &quot;ball&quot; 解释:  &quot;hit&quot; 出现了3次，但它是一个禁用的单词。 &quot;ball&quot; 出现了2次 (同时没有其他单词出现2次)，所以它是段落里出现次数最多的，且不在禁用列表中的单词。  注意，所有这些单词在段落里不区分大小写，标点符号需要忽略（即使是紧挨着单词也忽略， 比如 &quot;ball,&quot;），  &quot;hit&quot;不是最终的答案，虽然它出现次数更多，但它在禁用单词列表中。   &nbsp;   提示：    \t1 &lt;= 段落长度 &lt;= 1000 \t0 &lt;= 禁用单词个数 &lt;= 100 \t1 &lt;= 禁用单词长度 &lt;= 10 \t答案是唯一的, 且都是小写字母&nbsp;(即使在 paragraph 里是大写的，即使是一些特定的名词，答案都是小写的。) \tparagraph&nbsp;只包含字母、空格和下列标点符号!?&#39;,;. \t不存在没有连字符或者带有连字符的单词。 \t单词里只包含字母，不会出现省略号或者其他标点符号。   相关话题  [哈希表]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","String"],
        "url": "/problems/most-common-word/",
        "teaser": null
      },{
        "title": "山羊拉丁文",
        "excerpt":"824. 山羊拉丁文 (Easy)   给定一个由空格分割单词的句子&nbsp;S。每个单词只包含大写或小写字母。   我们要将句子转换为&nbsp;&ldquo;Goat Latin&rdquo;（一种类似于 猪拉丁文&nbsp;- Pig Latin 的虚构语言）。   山羊拉丁文的规则如下：    \t如果单词以元音开头（a, e, i, o, u），在单词后添加&quot;ma&quot;。  \t例如，单词&quot;apple&quot;变为&quot;applema&quot;。 \t  \t如果单词以辅音字母开头（即非元音字母），移除第一个字符并将它放到末尾，之后再添加&quot;ma&quot;。  \t例如，单词&quot;goat&quot;变为&quot;oatgma&quot;。 \t  \t根据单词在句子中的索引，在单词最后添加与索引相同数量的字母&#39;a&#39;，索引从1开始。  \t例如，在第一个单词后添加&quot;a&quot;，在第二个单词后添加&quot;aa&quot;，以此类推。   返回将&nbsp;S&nbsp;转换为山羊拉丁文后的句子。   示例 1:    输入: &quot;I speak Goat Latin&quot; 输出: &quot;Imaa peaksmaaa oatGmaaaa atinLmaaaaa&quot;   示例 2:    输入: &quot;The quick brown fox jumped over the lazy dog&quot; 输出: &quot;heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa&quot;   说明:    \tS&nbsp;中仅包含大小写字母和空格。单词间有且仅有一个空格。 \t1 &lt;= S.length &lt;= 150。   相关话题  [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/goat-latin/",
        "teaser": null
      },{
        "title": "较大分组的位置",
        "excerpt":"830. 较大分组的位置 (Easy)   在一个由小写字母构成的字符串 s 中，包含由一些连续的相同字符所构成的分组。   例如，在字符串 s = \"abbxxxxzyy\" 中，就含有 \"a\", \"bb\", \"xxxx\", \"z\" 和 \"yy\" 这样的一些分组。   分组可以用区间 [start, end] 表示，其中 start 和 end 分别表示该分组的起始和终止位置的下标。上例中的 \"xxxx\" 分组用区间表示为 [3,6] 。   我们称所有包含大于或等于三个连续字符的分组为 较大分组 。   找到每一个 较大分组 的区间，按起始位置下标递增顺序排序后，返回结果。       示例 1：    输入：s = \"abbxxxxzzy\" 输出：[[3,6]] 解释：\"xxxx\" 是一个起始于 3 且终止于 6 的较大分组。   示例 2：    输入：s = \"abc\" 输出：[] 解释：\"a\",\"b\" 和 \"c\" 均不是符合要求的较大分组。   示例 3：    输入：s = \"abcdddeeeeaabbbcd\" 输出：[[3,5],[6,9],[12,14]] 解释：较大分组为 \"ddd\", \"eeee\" 和 \"bbb\"  示例 4：    输入：s = \"aba\" 输出：[]      提示：    \t1 &lt;= s.length &lt;= 1000 \ts 仅含小写英文字母   相关话题  [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/positions-of-large-groups/",
        "teaser": null
      },{
        "title": "翻转图像",
        "excerpt":"832. 翻转图像 (Easy)   给定一个二进制矩阵 A，我们想先水平翻转图像，然后反转图像并返回结果。   水平翻转图片就是将图片的每一行都进行翻转，即逆序。例如，水平翻转 [1, 1, 0] 的结果是 [0, 1, 1]。   反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。例如，反转 [0, 1, 1] 的结果是 [1, 0, 0]。       示例 1：    输入：[[1,1,0],[1,0,1],[0,0,0]] 输出：[[1,0,0],[0,1,0],[1,1,1]] 解释：首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]；      然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]   示例 2：    输入：[[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]] 输出：[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]] 解释：首先翻转每一行: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]]；      然后反转图片: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]       提示：    \t1 &lt;= A.length = A[0].length &lt;= 20 \t0 &lt;= A[i][j] &lt;= 1   相关话题  [数组]   [双指针]   [矩阵]   [模拟]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Two Pointers","Matrix","Simulation"],
        "url": "/problems/flipping-an-image/",
        "teaser": null
      },{
        "title": "矩阵中的幻方",
        "excerpt":"840. 矩阵中的幻方 (Medium)   3 x 3 的幻方是一个填充有从 1 到 9 的不同数字的 3 x 3 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。   给定一个由整数组成的 grid，其中有多少个 3 &times; 3 的 &ldquo;幻方&rdquo; 子矩阵？（每个子矩阵都是连续的）。   &nbsp;   示例：   输入: [[4,3,8,4],       [9,5,1,9],       [2,7,6,2]] 输出: 1 解释:  下面的子矩阵是一个 3 x 3 的幻方： 438 951 276  而这一个不是： 384 519 762  总的来说，在本示例所给定的矩阵中只有一个 3 x 3 的幻方子矩阵。   提示:    \t1 &lt;= grid.length&nbsp;&lt;= 10 \t1 &lt;= grid[0].length&nbsp;&lt;= 10 \t0 &lt;= grid[i][j] &lt;= 15   相关话题  [数组]   [数学]   [矩阵]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Math","Matrix"],
        "url": "/problems/magic-squares-in-grid/",
        "teaser": null
      },{
        "title": "到最近的人的最大距离",
        "excerpt":"849. 到最近的人的最大距离 (Medium)   给你一个数组 seats 表示一排座位，其中 seats[i] = 1 代表有人坐在第 i 个座位上，seats[i] = 0 代表座位 i 上是空的（下标从 0 开始）。   至少有一个空座位，且至少有一人已经坐在座位上。   亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。   返回他到离他最近的人的最大距离。       示例 1：     输入：seats = [1,0,0,0,1,0,1] 输出：2 解释： 如果亚历克斯坐在第二个空位（seats[2]）上，他到离他最近的人的距离为 2 。 如果亚历克斯坐在其它任何一个空位上，他到离他最近的人的距离为 1 。 因此，他到离他最近的人的最大距离是 2 。    示例 2：    输入：seats = [1,0,0,0] 输出：3 解释： 如果亚历克斯坐在最后一个座位上，他离最近的人有 3 个座位远。 这是可能的最大距离，所以答案是 3 。   示例 3：    输入：seats = [0,1] 输出：1       提示：    \t2 &lt;= seats.length &lt;= 2 * 104 \tseats[i] 为 0 或 1 \t至少有一个 空座位 \t至少有一个 座位上有人   相关话题  [数组]   相似题目     考场就座 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array"],
        "url": "/problems/maximize-distance-to-closest-person/",
        "teaser": null
      },{
        "title": "亲密字符串",
        "excerpt":"859. 亲密字符串 (Easy)   给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。   交换字母的定义是取两个下标 i 和 j （下标从 0 开始），只要 i!=j 就交换 A[i] 和 A[j] 处的字符。例如，在 \"abcd\" 中交换下标 0 和下标 2 的元素可以生成 \"cbad\" 。       示例 1：    输入： A = \"ab\", B = \"ba\" 输出： true 解释： 你可以交换 A[0] = 'a' 和 A[1] = 'b' 生成 \"ba\"，此时 A 和 B 相等。  示例 2：    输入： A = \"ab\", B = \"ab\" 输出： false 解释： 你只能交换 A[0] = 'a' 和 A[1] = 'b' 生成 \"ba\"，此时 A 和 B 不相等。   示例 3:    输入： A = \"aa\", B = \"aa\" 输出： true 解释： 你可以交换 A[0] = 'a' 和 A[1] = 'a' 生成 \"aa\"，此时 A 和 B 相等。  示例 4：    输入： A = \"aaaaaaabc\", B = \"aaaaaaacb\" 输出： true   示例 5：    输入： A = \"\", B = \"aa\" 输出： false       提示：    \t0 &lt;= A.length &lt;= 20000 \t0 &lt;= B.length &lt;= 20000 \tA 和 B 仅由小写字母构成。   相关话题  [哈希表]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","String"],
        "url": "/problems/buddy-strings/",
        "teaser": null
      },{
        "title": "转置矩阵",
        "excerpt":"867. 转置矩阵 (Easy)   给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。   矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。          示例 1：    输入：matrix = [[1,2,3],[4,5,6],[7,8,9]] 输出：[[1,4,7],[2,5,8],[3,6,9]]   示例 2：    输入：matrix = [[1,2,3],[4,5,6]] 输出：[[1,4],[2,5],[3,6]]       提示：    \tm == matrix.length \tn == matrix[i].length \t1 &lt;= m, n &lt;= 1000 \t1 &lt;= m * n &lt;= 105 \t-109 &lt;= matrix[i][j] &lt;= 109   相关话题  [数组]   [矩阵]   [模拟]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Matrix","Simulation"],
        "url": "/problems/transpose-matrix/",
        "teaser": null
      },{
        "title": "石子游戏",
        "excerpt":"877. 石子游戏 (Medium)   亚历克斯和李用几堆石子在做游戏。偶数堆石子排成一行，每堆都有正整数颗石子 piles[i] 。   游戏以谁手中的石子最多来决出胜负。石子的总数是奇数，所以没有平局。   亚历克斯和李轮流进行，亚历克斯先开始。 每回合，玩家从行的开始或结束处取走整堆石头。 这种情况一直持续到没有更多的石子堆为止，此时手中石子最多的玩家获胜。   假设亚历克斯和李都发挥出最佳水平，当亚历克斯赢得比赛时返回 true ，当李赢得比赛时返回 false 。       示例：    输入：[5,3,4,5] 输出：true 解释： 亚历克斯先开始，只能拿前 5 颗或后 5 颗石子 。 假设他取了前 5 颗，这一行就变成了 [3,4,5] 。 如果李拿走前 3 颗，那么剩下的是 [4,5]，亚历克斯拿走后 5 颗赢得 10 分。 如果李拿走后 5 颗，那么剩下的是 [3,4]，亚历克斯拿走后 4 颗赢得 9 分。 这表明，取前 5 颗石子对亚历克斯来说是一个胜利的举动，所以我们返回 true 。       提示：    \t2 &lt;= piles.length &lt;= 500 \tpiles.length 是偶数。 \t1 &lt;= piles[i] &lt;= 500 \tsum(piles) 是奇数。   相关话题  [数组]   [数学]   [动态规划]   [博弈]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Math","Dynamic Programming","Game Theory"],
        "url": "/problems/stone-game/",
        "teaser": null
      },{
        "title": "公平的糖果棒交换",
        "excerpt":"888. 公平的糖果棒交换 (Easy)   爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 根糖果棒的大小，B[j] 是鲍勃拥有的第 j 根糖果棒的大小。   因为他们是朋友，所以他们想交换一根糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）   返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。   如果有多个答案，你可以返回其中任何一个。保证答案存在。       示例 1：    输入：A = [1,1], B = [2,2] 输出：[1,2]   示例 2：    输入：A = [1,2], B = [2,3] 输出：[1,2]   示例 3：    输入：A = [2], B = [1,3] 输出：[2,3]   示例 4：    输入：A = [1,2,5], B = [2,4] 输出：[5,4]       提示：    \t1 &lt;= A.length &lt;= 10000 \t1 &lt;= B.length &lt;= 10000 \t1 &lt;= A[i] &lt;= 100000 \t1 &lt;= B[i] &lt;= 100000 \t保证爱丽丝与鲍勃的糖果总量不同。 \t答案肯定存在。   相关话题  [数组]   [哈希表]   [二分查找]   [排序]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table","Binary Search","Sorting"],
        "url": "/problems/fair-candy-swap/",
        "teaser": null
      },{
        "title": "特殊等价字符串组",
        "excerpt":"893. 特殊等价字符串组 (Medium)   给你一个字符串数组 words。   一步操作中，你可以交换字符串 words[i] 的任意两个偶数下标对应的字符或任意两个奇数下标对应的字符。   对两个字符串&nbsp;words[i] 和 words[j] 而言，如果经过任意次数的操作，words[i] == words[j] ，那么这两个字符串是 特殊等价 的。    \t例如，words[i] = \"zzxy\" 和 words[j] = \"xyzz\" 是一对 特殊等价 字符串，因为可以按 \"zzxy\" -&gt; \"xzzy\" -&gt; \"xyzz\" 的操作路径使&nbsp;words[i] == words[j] 。   现在规定，words 的 一组特殊等价字符串 就是 words 的一个同时满足下述条件的非空子集：    \t该组中的每一对字符串都是 特殊等价 的 \t该组字符串已经涵盖了该类别中的所有特殊等价字符串，容量达到理论上的最大值（也就是说，如果一个字符串不在该组中，那么这个字符串就 不会 与该组内任何字符串特殊等价）   返回 words 中 特殊等价字符串组 的数量。   &nbsp;      示例 1：    输入：words = [\"abcd\",\"cdab\",\"cbad\",\"xyzz\",\"zzxy\",\"zzyx\"] 输出：3 解释： 其中一组为 [\"abcd\", \"cdab\", \"cbad\"]，因为它们是成对的特殊等价字符串，且没有其他字符串与这些字符串特殊等价。 另外两组分别是 [\"xyzz\", \"zzxy\"] 和 [\"zzyx\"]。特别需要注意的是，\"zzxy\" 不与 \"zzyx\" 特殊等价。   示例 2：    输入：words = [\"abc\",\"acb\",\"bac\",\"bca\",\"cab\",\"cba\"] 输出：3 解释：3 组 [\"abc\",\"cba\"]，[\"acb\",\"bca\"]，[\"bac\",\"cab\"]   &nbsp;   提示：    \t1 &lt;= words.length &lt;= 1000 \t1 &lt;= words[i].length &lt;= 20 \t所有 words[i]&nbsp;都只由小写字母组成。 \t所有 words[i]&nbsp;都具有相同的长度。   相关话题  [数组]   [哈希表]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table","String"],
        "url": "/problems/groups-of-special-equivalent-strings/",
        "teaser": null
      },{
        "title": "单调数列",
        "excerpt":"896. 单调数列 (Easy)   如果数组是单调递增或单调递减的，那么它是单调的。   如果对于所有 i &lt;= j，A[i] &lt;= A[j]，那么数组 A 是单调递增的。 如果对于所有 i &lt;= j，A[i]&gt; = A[j]，那么数组 A 是单调递减的。   当给定的数组 A&nbsp;是单调数组时返回 true，否则返回 false。   &nbsp;      示例 1：   输入：[1,2,2,3] 输出：true   示例 2：   输入：[6,5,4,4] 输出：true   示例 3：   输入：[1,3,2] 输出：false   示例 4：   输入：[1,2,4,5] 输出：true   示例&nbsp;5：   输入：[1,1,1] 输出：true   &nbsp;   提示：    \t1 &lt;= A.length &lt;= 50000 \t-100000 &lt;= A[i] &lt;= 100000   相关话题  [数组]     解法  ","categories": ["Leetcode"],
        "tags": ["Array"],
        "url": "/problems/monotonic-array/",
        "teaser": null
      },{
        "title": "按奇偶排序数组",
        "excerpt":"905. 按奇偶排序数组 (Easy)   给定一个非负整数数组 A，返回一个数组，在该数组中，&nbsp;A 的所有偶数元素之后跟着所有奇数元素。   你可以返回满足此条件的任何数组作为答案。   &nbsp;   示例：   输入：[3,1,2,4] 输出：[2,4,3,1] 输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。   &nbsp;   提示：    \t1 &lt;= A.length &lt;= 5000 \t0 &lt;= A[i] &lt;= 5000   相关话题  [数组]   [双指针]   [排序]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Two Pointers","Sorting"],
        "url": "/problems/sort-array-by-parity/",
        "teaser": null
      },{
        "title": "最小差值 I",
        "excerpt":"908. 最小差值 I (Easy)   给你一个整数数组 nums，请你给数组中的每个元素 nums[i] 都加上一个任意数字 x （-k &lt;= x &lt;= k），从而得到一个新数组 result 。   返回数组 result 的最大值和最小值之间可能存在的最小差值。              示例 1：    输入：nums = [1], k = 0 输出：0 解释：result = [1]    示例 2：    输入：nums = [0,10], k = 2 输出：6 解释：result = [2,8]    示例 3：    输入：nums = [1,3,6], k = 3 输出：0 解释：result = [3,3,3] or result = [4,4,4]          提示：    \t1 &lt;= nums.length &lt;= 10000 \t0 &lt;= nums[i] &lt;= 10000 \t0 &lt;= k &lt;= 10000   相关话题  [数组]   [数学]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Math"],
        "url": "/problems/smallest-range-i/",
        "teaser": null
      },{
        "title": "排序数组",
        "excerpt":"912. 排序数组 (Medium)   给你一个整数数组&nbsp;nums，请你将该数组升序排列。   &nbsp;      示例 1：   输入：nums = [5,2,3,1] 输出：[1,2,3,5]   示例 2：   输入：nums = [5,1,1,2,0,0] 输出：[0,0,1,1,2,5]   &nbsp;   提示：    \t1 &lt;= nums.length &lt;= 50000 \t-50000 &lt;= nums[i] &lt;= 50000   相关话题  [数组]   [分治]   [桶排序]   [计数排序]   [基数排序]   [排序]   [堆（优先队列）]   [归并排序]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Divide and Conquer","Bucket Sort","Counting Sort","Radix Sort","Sorting","Heap (Priority Queue)","Merge Sort"],
        "url": "/problems/sort-an-array/",
        "teaser": null
      },{
        "title": "卡牌分组",
        "excerpt":"914. 卡牌分组 (Easy)   给定一副牌，每张牌上都写着一个整数。   此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：    \t每组都有&nbsp;X&nbsp;张牌。 \t组内所有的牌上都写着相同的整数。   仅当你可选的 X &gt;= 2 时返回&nbsp;true。   &nbsp;   示例 1：   输入：[1,2,3,4,4,3,2,1] 输出：true 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]   示例 2：   输入：[1,1,1,2,2,2,3,3] 输出：false 解释：没有满足要求的分组。   示例 3：   输入：[1] 输出：false 解释：没有满足要求的分组。   示例 4：   输入：[1,1] 输出：true 解释：可行的分组是 [1,1]   示例 5：   输入：[1,1,2,2,2,2] 输出：true 解释：可行的分组是 [1,1]，[2,2]，[2,2]     提示：    \t1 &lt;= deck.length &lt;= 10000 \t0 &lt;= deck[i] &lt;&nbsp;10000   &nbsp;   相关话题  [数组]   [哈希表]   [数学]   [计数]   [数论]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table","Math","Counting","Number Theory"],
        "url": "/problems/x-of-a-kind-in-a-deck-of-cards/",
        "teaser": null
      },{
        "title": "仅仅反转字母",
        "excerpt":"917. 仅仅反转字母 (Easy)   给定一个字符串&nbsp;S，返回&nbsp;&ldquo;反转后的&rdquo;&nbsp;字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。   &nbsp;      示例 1：   输入：&quot;ab-cd&quot; 输出：&quot;dc-ba&quot;   示例 2：   输入：&quot;a-bC-dEf-ghIj&quot; 输出：&quot;j-Ih-gfE-dCba&quot;   示例 3：   输入：&quot;Test1ng-Leet=code-Q!&quot; 输出：&quot;Qedo1ct-eeLg=ntse-T!&quot;   &nbsp;   提示：    \tS.length &lt;= 100 \t33 &lt;= S[i].ASCIIcode &lt;= 122&nbsp; \tS 中不包含&nbsp;\\ or &quot;   相关话题  [双指针]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Two Pointers","String"],
        "url": "/problems/reverse-only-letters/",
        "teaser": null
      },{
        "title": "按奇偶排序数组 II",
        "excerpt":"922. 按奇偶排序数组 II (Easy)   给定一个非负整数数组&nbsp;A， A 中一半整数是奇数，一半整数是偶数。   对数组进行排序，以便当&nbsp;A[i] 为奇数时，i&nbsp;也是奇数；当&nbsp;A[i]&nbsp;为偶数时， i 也是偶数。   你可以返回任何满足上述条件的数组作为答案。   &nbsp;   示例：   输入：[4,2,5,7] 输出：[4,5,2,7] 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。   &nbsp;   提示：    \t2 &lt;= A.length &lt;= 20000 \tA.length % 2 == 0 \t0 &lt;= A[i] &lt;= 1000   &nbsp;   相关话题  [数组]   [双指针]   [排序]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Two Pointers","Sorting"],
        "url": "/problems/sort-array-by-parity-ii/",
        "teaser": null
      },{
        "title": "长按键入",
        "excerpt":"925. 长按键入 (Easy)   你的朋友正在使用键盘输入他的名字&nbsp;name。偶尔，在键入字符&nbsp;c&nbsp;时，按键可能会被长按，而字符可能被输入 1 次或多次。   你将会检查键盘输入的字符&nbsp;typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回&nbsp;True。   &nbsp;   示例 1：   输入：name = &quot;alex&quot;, typed = &quot;aaleex&quot; 输出：true 解释：&#39;alex&#39; 中的 &#39;a&#39; 和 &#39;e&#39; 被长按。   示例 2：   输入：name = &quot;saeed&quot;, typed = &quot;ssaaedd&quot; 输出：false 解释：&#39;e&#39; 一定需要被键入两次，但在 typed 的输出中不是这样。   示例 3：   输入：name = &quot;leelee&quot;, typed = &quot;lleeelee&quot; 输出：true   示例 4：   输入：name = &quot;laiden&quot;, typed = &quot;laiden&quot; 输出：true 解释：长按名字中的字符并不是必要的。   &nbsp;   提示：    \tname.length &lt;= 1000 \ttyped.length &lt;= 1000 \tname 和&nbsp;typed&nbsp;的字符都是小写字母。   &nbsp;   &nbsp;   相关话题  [双指针]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Two Pointers","String"],
        "url": "/problems/long-pressed-name/",
        "teaser": null
      },{
        "title": "独特的电子邮件地址",
        "excerpt":"929. 独特的电子邮件地址 (Easy)   每封电子邮件都由一个本地名称和一个域名组成，以 @ 符号分隔。   例如，在&nbsp;alice@leetcode.com中，&nbsp;alice&nbsp;是本地名称，而&nbsp;leetcode.com&nbsp;是域名。   除了小写字母，这些电子邮件还可能包含 &#39;.&#39; 或 &#39;+&#39;。   如果在电子邮件地址的本地名称部分中的某些字符之间添加句点（&#39;.&#39;），则发往那里的邮件将会转发到本地名称中没有点的同一地址。例如，&quot;alice.z@leetcode.com&rdquo; 和 &ldquo;alicez@leetcode.com&rdquo;&nbsp;会转发到同一电子邮件地址。 （请注意，此规则不适用于域名。）   如果在本地名称中添加加号（&#39;+&#39;），则会忽略第一个加号后面的所有内容。这允许过滤某些电子邮件，例如 m.y+name@email.com 将转发到 my@email.com。 （同样，此规则不适用于域名。）   可以同时使用这两个规则。   给定电子邮件列表 emails，我们会向列表中的每个地址发送一封电子邮件。实际收到邮件的不同地址有多少？   &nbsp;   示例：   输入：[&quot;test.email+alex@leetcode.com&quot;,&quot;test.e.mail+bob.cathy@leetcode.com&quot;,&quot;testemail+david@lee.tcode.com&quot;] 输出：2 解释：实际收到邮件的是 &quot;testemail@leetcode.com&quot; 和 &quot;testemail@lee.tcode.com&quot;。   &nbsp;   提示：    \t1 &lt;= emails[i].length&nbsp;&lt;= 100 \t1 &lt;= emails.length &lt;= 100 \t每封 emails[i] 都包含有且仅有一个 &#39;@&#39; 字符。   相关话题  [数组]   [哈希表]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table","String"],
        "url": "/problems/unique-email-addresses/",
        "teaser": null
      },{
        "title": "最近的请求次数",
        "excerpt":"933. 最近的请求次数 (Easy)   写一个 RecentCounter 类来计算特定时间范围内最近的请求。   请你实现 RecentCounter 类：    \tRecentCounter() 初始化计数器，请求数为 0 。 \tint ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。   保证 每次对 ping 的调用都使用比之前更大的 t 值。       示例：    输入： [\"RecentCounter\", \"ping\", \"ping\", \"ping\", \"ping\"] [[], [1], [100], [3001], [3002]] 输出： [null, 1, 2, 3, 3]  解释： RecentCounter recentCounter = new RecentCounter(); recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1 recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2 recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3 recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3       提示：    \t1 &lt;= t &lt;= 109 \t保证每次对 ping 调用所使用的 t 值都 严格递增 \t至多调用 ping 方法 104 次   相关话题  [设计]   [队列]   [数据流]     解法  ","categories": ["Leetcode"],
        "tags": ["Design","Queue","Data Stream"],
        "url": "/problems/number-of-recent-calls/",
        "teaser": null
      },{
        "title": "重新排列日志文件",
        "excerpt":"937. 重新排列日志文件 (Easy)   给你一个日志数组 logs。每条日志都是以空格分隔的字串，其第一个字为字母与数字混合的 标识符 。   有两种不同类型的日志：    \t字母日志：除标识符之外，所有字均由小写字母组成 \t数字日志：除标识符之外，所有字均由数字组成   请按下述规则将日志重新排序：    \t所有 字母日志 都排在 数字日志 之前。 \t字母日志 在内容不同时，忽略标识符后，按内容字母顺序排序；在内容相同时，按标识符排序。 \t数字日志 应该保留原来的相对顺序。   返回日志的最终顺序。       示例 1：    输入：logs = [\"dig1 8 1 5 1\",\"let1 art can\",\"dig2 3 6\",\"let2 own kit dig\",\"let3 art zero\"] 输出：[\"let1 art can\",\"let3 art zero\",\"let2 own kit dig\",\"dig1 8 1 5 1\",\"dig2 3 6\"] 解释： 字母日志的内容都不同，所以顺序为 \"art can\", \"art zero\", \"own kit dig\" 。 数字日志保留原来的相对顺序 \"dig1 8 1 5 1\", \"dig2 3 6\" 。   示例 2：    输入：logs = [\"a1 9 2 3 1\",\"g1 act car\",\"zo4 4 7\",\"ab1 off key dog\",\"a8 act zoo\"] 输出：[\"g1 act car\",\"a8 act zoo\",\"ab1 off key dog\",\"a1 9 2 3 1\",\"zo4 4 7\"]       提示：    \t1 &lt;= logs.length &lt;= 100 \t3 &lt;= logs[i].length &lt;= 100 \tlogs[i] 中，字与字之间都用 单个 空格分隔 \t题目数据保证 logs[i] 都有一个标识符，并且在标识符之后至少存在一个字   相关话题  [数组]   [字符串]   [排序]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","String","Sorting"],
        "url": "/problems/reorder-data-in-log-files/",
        "teaser": null
      },{
        "title": "二叉搜索树的范围和",
        "excerpt":"938. 二叉搜索树的范围和 (Easy)   给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。       示例 1：     输入：root = [10,5,15,3,7,null,18], low = 7, high = 15 输出：32   示例 2：     输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10 输出：23       提示：    \t树中节点数目在范围 [1, 2 * 104] 内 \t1 &lt;= Node.val &lt;= 105 \t1 &lt;= low &lt;= high &lt;= 105 \t所有 Node.val 互不相同   相关话题  [树]   [深度优先搜索]   [二叉搜索树]   [二叉树]     解法  ","categories": ["Leetcode"],
        "tags": ["Tree","Depth-First Search","Binary Search Tree","Binary Tree"],
        "url": "/problems/range-sum-of-bst/",
        "teaser": null
      },{
        "title": "有效的山脉数组",
        "excerpt":"941. 有效的山脉数组 (Easy)   给定一个整数数组 arr，如果它是有效的山脉数组就返回 true，否则返回 false。   让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：    \tarr.length &gt;= 3 \t在 0 &lt; i &lt; arr.length - 1 条件下，存在 i 使得： \t \t\tarr[0] &lt; arr[1] &lt; ... arr[i-1] &lt; arr[i]  \t\tarr[i] &gt; arr[i+1] &gt; ... &gt; arr[arr.length - 1] \t \t              示例 1：    输入：arr = [2,1] 输出：false   示例 2：    输入：arr = [3,5,5] 输出：false   示例 3：    输入：arr = [0,3,2,1] 输出：true      提示：    \t1 &lt;= arr.length &lt;= 104 \t0 &lt;= arr[i] &lt;= 104   相关话题  [数组]     解法  ","categories": ["Leetcode"],
        "tags": ["Array"],
        "url": "/problems/valid-mountain-array/",
        "teaser": null
      },{
        "title": "增减字符串匹配",
        "excerpt":"942. 增减字符串匹配 (Easy)   给定只含&nbsp;&quot;I&quot;（增大）或 &quot;D&quot;（减小）的字符串&nbsp;S&nbsp;，令&nbsp;N = S.length。   返回&nbsp;[0, 1, ..., N]&nbsp;的任意排列&nbsp;A&nbsp;使得对于所有&nbsp;i = 0,&nbsp;..., N-1，都有：    \t如果&nbsp;S[i] == &quot;I&quot;，那么&nbsp;A[i] &lt; A[i+1] \t如果&nbsp;S[i] == &quot;D&quot;，那么&nbsp;A[i] &gt; A[i+1]   &nbsp;   示例 1：   输入：&quot;IDID&quot; 输出：[0,4,1,3,2]   示例 2：   输入：&quot;III&quot; 输出：[0,1,2,3]   示例 3：   输入：&quot;DDI&quot; 输出：[3,2,0,1]  &nbsp;   提示：    \t1 &lt;= S.length &lt;= 10000 \tS 只包含字符&nbsp;&quot;I&quot;&nbsp;或&nbsp;&quot;D&quot;。   相关话题  [贪心]   [数组]   [数学]   [双指针]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Greedy","Array","Math","Two Pointers","String"],
        "url": "/problems/di-string-match/",
        "teaser": null
      },{
        "title": "SSH隧道",
        "excerpt":"SSH隧道  SSH非常适合安全访问服务器，但SSH也有一些功能强大，鲜为人知的功能。其中一个更强大且常常未知的功能是隧道。   通过隧道，您可以将远程服务器上的端口转发到本地服务器上的端口。这对于Web开发人员尤其有用，因为它允许您在本地Web服务器和Internet之间创建一个隧道，允许任何人访问您的本地应用程序或网站。   要求  在开始之前，您需要拥有一个可以通过SSH访问的可公开访问的服务器。只要安装了SSH，它就可以是任何类型的服务器。   您还需要 GatewayPorts yes 在SSH服务器配置文件中进行设置。这通常位于 /etc/ssh/sshd_config ，但可能因您的系统而异。进行编辑后，请确保通过运行 sudo /etc/init.d/ssh restart 或重新启动SSH服务器 sudo service ssh restart。   创建隧道  一旦完成所有设置，下一步就非常简单。你只需要运行：   $ ssh -N -R 3999：localhost：80 you@example.com  注意：您无需键入$符号   以下是每个部分的功能细分：   &gt; ssh -N -R  这一切都开始了。-N 可以确保您还没有登录到远程服务器，-R 就是告诉SSH建立隧道。   &gt; 3999:localhost:80  您可以在此处设置远程服务器的端口，本地服务器地址和本地服务器的端口。   第一个数字是您希望远程服务器侦听的端口。这可以是1024-65535之间的任何数字，如果您有一个设置，则需要确保在防火墙中允许该端口。接下来是本地服务器地址。在几乎所有情况下，这都是localhost。最后，最后一个数字是本地Web服务器正在侦听的端口。   &gt; you@example.com  该命令的最后一部分是指定对服务器具有SSH访问权限的用户以及远程服务器的地址。   如果您已在DNS中为服务器设置域名，则可以使用它来访问隧道。否则，您将需要使用服务器的IP地址。   现在您已打开SSH隧道，使用浏览器中的转发端口转到远程服务器地址，例如 example.com:3999，应该允许您从任何有Internet连接的地方查看本地网站或应用程序。   设置需要一些工作，但SSH隧道非常适合共享或测试本地开发站点/应用程序。   Thanks.  ","categories": ["Network"],
        "tags": ["Network","SSH"],
        "url": "/network/ssh-tunneling-how-to/",
        "teaser": null
      },{
        "title": "删列造序",
        "excerpt":"944. 删列造序 (Easy)   给你由 n 个小写字母字符串组成的数组 strs，其中每个字符串长度相等。   这些字符串可以每个一行，排成一个网格。例如，strs = [\"abc\", \"bce\", \"cae\"] 可以排列为：    abc bce cae  你需要找出并删除 不是按字典序升序排列的 列。在上面的例子（下标从 0 开始）中，列 0（'a', 'b', 'c'）和列 2（'c', 'e', 'e'）都是按升序排列的，而列 1（'b', 'c', 'a'）不是，所以要删除列 1 。   返回你需要删除的列数。       示例 1：    输入：strs = [\"cba\",\"daf\",\"ghi\"] 输出：1 解释：网格示意如下：   cba   daf   ghi 列 0 和列 2 按升序排列，但列 1 不是，所以只需要删除列 1 。   示例 2：    输入：strs = [\"a\",\"b\"] 输出：0 解释：网格示意如下：   a   b 只有列 0 这一列，且已经按升序排列，所以不用删除任何列。   示例 3：    输入：strs = [\"zyx\",\"wvu\",\"tsr\"] 输出：3 解释：网格示意如下：   zyx   wvu   tsr 所有 3 列都是非升序排列的，所以都要删除。       提示：    \tn == strs.length \t1 &lt;= n &lt;= 100 \t1 &lt;= strs[i].length &lt;= 1000 \tstrs[i] 由小写英文字母组成   相关话题  [数组]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","String"],
        "url": "/problems/delete-columns-to-make-sorted/",
        "teaser": null
      },{
        "title": "给定数字能组成的最大时间",
        "excerpt":"949. 给定数字能组成的最大时间 (Medium)   给定一个由 4 位数字组成的数组，返回可以设置的符合 24 小时制的最大时间。   24 小时格式为 \"HH:MM\" ，其中 HH 在 00 到 23 之间，MM 在 00 到 59 之间。最小的 24 小时制时间是 00:00 ，而最大的是 23:59 。从 00:00 （午夜）开始算起，过得越久，时间越大。   以长度为 5 的字符串，按 \"HH:MM\" 格式返回答案。如果不能确定有效时间，则返回空字符串。       示例 1：    输入：arr = [1,2,3,4] 输出：\"23:41\" 解释：有效的 24 小时制时间是 \"12:34\"，\"12:43\"，\"13:24\"，\"13:42\"，\"14:23\"，\"14:32\"，\"21:34\"，\"21:43\"，\"23:14\" 和 \"23:41\" 。这些时间中，\"23:41\" 是最大时间。   示例 2：    输入：arr = [5,5,5,5] 输出：\"\" 解释：不存在有效的 24 小时制时间，因为 \"55:55\" 无效。   示例 3：    输入：arr = [0,0,0,0] 输出：\"00:00\"   示例 4：    输入：arr = [0,0,1,0] 输出：\"10:00\"       提示：    \tarr.length == 4 \t0 &lt;= arr[i] &lt;= 9   相关话题  [字符串]   [枚举]     解法  ","categories": ["Leetcode"],
        "tags": ["String","Enumeration"],
        "url": "/problems/largest-time-for-given-digits/",
        "teaser": null
      },{
        "title": "验证外星语词典",
        "excerpt":"953. 验证外星语词典 (Easy)   某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。   给定一组用外星语书写的单词 words，以及其字母表的顺序 order，只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回 false。       示例 1：    输入：words = [\"hello\",\"leetcode\"], order = \"hlabcdefgijkmnopqrstuvwxyz\" 输出：true 解释：在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。  示例 2：    输入：words = [\"word\",\"world\",\"row\"], order = \"worldabcefghijkmnpqstuvxyz\" 输出：false 解释：在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] &gt; words[1]，因此单词序列不是按字典序排列的。  示例 3：    输入：words = [\"apple\",\"app\"], order = \"abcdefghijklmnopqrstuvwxyz\" 输出：false 解释：当前三个字符 \"app\" 匹配时，第二个字符串相对短一些，然后根据词典编纂规则 \"apple\" &gt; \"app\"，因为 'l' &gt; '∅'，其中 '∅' 是空白字符，定义为比任何其他字符都小（更多信息）。       提示：    \t1 &lt;= words.length &lt;= 100 \t1 &lt;= words[i].length &lt;= 20 \torder.length == 26 \t在 words[i] 和 order 中的所有字符都是英文小写字母。   相关话题  [数组]   [哈希表]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table","String"],
        "url": "/problems/verifying-an-alien-dictionary/",
        "teaser": null
      },{
        "title": "重复 N 次的元素",
        "excerpt":"961. 重复 N 次的元素 (Easy)   在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。   返回重复了 N 次的那个元素。          示例 1：    输入：[1,2,3,3] 输出：3   示例 2：    输入：[2,1,2,5,3,2] 输出：2   示例 3：    输入：[5,1,5,2,5,3,5,4] 输出：5       提示：    \t4 &lt;= A.length &lt;= 10000 \t0 &lt;= A[i] &lt; 10000 \tA.length 为偶数   相关话题  [数组]   [哈希表]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table"],
        "url": "/problems/n-repeated-element-in-size-2n-array/",
        "teaser": null
      },{
        "title": "单值二叉树",
        "excerpt":"965. 单值二叉树 (Easy)   如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。   只有给定的树是单值二叉树时，才返回&nbsp;true；否则返回 false。   &nbsp;   示例 1：      输入：[1,1,1,1,1,null,1] 输出：true   示例 2：      输入：[2,2,2,5,2] 输出：false   &nbsp;   提示：    \t给定树的节点数范围是&nbsp;[1, 100]。 \t每个节点的值都是整数，范围为&nbsp;[0, 99]&nbsp;。   相关话题  [树]   [深度优先搜索]   [广度优先搜索]   [二叉树]     解法  ","categories": ["Leetcode"],
        "tags": ["Tree","Depth-First Search","Breadth-First Search","Binary Tree"],
        "url": "/problems/univalued-binary-tree/",
        "teaser": null
      },{
        "title": "强整数",
        "excerpt":"970. 强整数 (Medium)   给定两个正整数 x 和 y，如果某一整数等于 x^i + y^j，其中整数&nbsp;i &gt;= 0 且&nbsp;j &gt;= 0，那么我们认为该整数是一个强整数。   返回值小于或等于&nbsp;bound&nbsp;的所有强整数组成的列表。   你可以按任何顺序返回答案。在你的回答中，每个值最多出现一次。   &nbsp;   示例 1：   输入：x = 2, y = 3, bound = 10 输出：[2,3,4,5,7,9,10] 解释：  2 = 2^0 + 3^0 3 = 2^1 + 3^0 4 = 2^0 + 3^1 5 = 2^1 + 3^1 7 = 2^2 + 3^1 9 = 2^3 + 3^0 10 = 2^0 + 3^2   示例&nbsp;2：   输入：x = 3, y = 5, bound = 15 输出：[2,4,6,8,10,14]   &nbsp;   提示：    \t1 &lt;= x &lt;= 100 \t1 &lt;= y&nbsp;&lt;= 100 \t0 &lt;= bound&nbsp;&lt;= 10^6   相关话题  [哈希表]   [数学]     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","Math"],
        "url": "/problems/powerful-integers/",
        "teaser": null
      },{
        "title": "最接近原点的 K 个点",
        "excerpt":"973. 最接近原点的 K 个点 (Medium)   我们有一个由平面上的点组成的列表 points。需要从中找出 K 个距离原点 (0, 0) 最近的点。   （这里，平面上两点之间的距离是欧几里德距离。）   你可以按任何顺序返回答案。除了点坐标的顺序之外，答案确保是唯一的。   &nbsp;   示例 1：   输入：points = [[1,3],[-2,2]], K = 1 输出：[[-2,2]] 解释：  (1, 3) 和原点之间的距离为 sqrt(10)， (-2, 2) 和原点之间的距离为 sqrt(8)， 由于 sqrt(8) &lt; sqrt(10)，(-2, 2) 离原点更近。 我们只需要距离原点最近的 K = 1 个点，所以答案就是 [[-2,2]]。   示例 2：   输入：points = [[3,3],[5,-1],[-2,4]], K = 2 输出：[[3,3],[-2,4]] （答案 [[-2,4],[3,3]] 也会被接受。）   &nbsp;   提示：    \t1 &lt;= K &lt;= points.length &lt;= 10000 \t-10000 &lt; points[i][0] &lt; 10000 \t-10000 &lt; points[i][1] &lt; 10000   相关话题  [几何]   [数组]   [数学]   [分治]   [快速选择]   [排序]   [堆（优先队列）]   相似题目     数组中的第K个最大元素 (Medium)   前 K 个高频元素 (Medium)   前K个高频单词 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Geometry","Array","Math","Divide and Conquer","Quickselect","Sorting","Heap (Priority Queue)"],
        "url": "/problems/k-closest-points-to-origin/",
        "teaser": null
      },{
        "title": "三角形的最大周长",
        "excerpt":"976. 三角形的最大周长 (Easy)   给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。   如果不能形成任何面积不为零的三角形，返回&nbsp;0。   &nbsp;      示例 1：   输入：[2,1,2] 输出：5   示例 2：   输入：[1,2,1] 输出：0   示例 3：   输入：[3,2,3,4] 输出：10   示例 4：   输入：[3,6,2,3] 输出：8   &nbsp;   提示：    \t3 &lt;= A.length &lt;= 10000 \t1 &lt;= A[i] &lt;= 10^6   相关话题  [贪心]   [数组]   [数学]   [排序]   相似题目     最大三角形面积 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Greedy","Array","Math","Sorting"],
        "url": "/problems/largest-perimeter-triangle/",
        "teaser": null
      },{
        "title": "有序数组的平方",
        "excerpt":"977. 有序数组的平方 (Easy)   给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。          示例 1：    输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100] 排序后，数组变为 [0,1,9,16,100]  示例 2：    输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121]       提示：    \t1 &lt;= nums.length &lt;= 104 \t-104 &lt;= nums[i] &lt;= 104 \tnums 已按 非递减顺序 排序       进阶：    \t请你设计时间复杂度为 O(n) 的算法解决本问题   相关话题  [数组]   [双指针]   [排序]   相似题目     合并两个有序数组 (Easy)   有序转化数组 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Two Pointers","Sorting"],
        "url": "/problems/squares-of-a-sorted-array/",
        "teaser": null
      },{
        "title": "不含 AAA 或 BBB 的字符串",
        "excerpt":"984. 不含 AAA 或 BBB 的字符串 (Medium)   给定两个整数&nbsp;A&nbsp;和&nbsp;B，返回任意字符串 S，要求满足：    \tS 的长度为&nbsp;A + B，且正好包含&nbsp;A&nbsp;个 &#39;a&#39;&nbsp;字母与&nbsp;B&nbsp;个 &#39;b&#39;&nbsp;字母； \t子串&nbsp;&#39;aaa&#39;&nbsp;没有出现在&nbsp;S&nbsp;中； \t子串&nbsp;&#39;bbb&#39; 没有出现在&nbsp;S&nbsp;中。   &nbsp;   示例 1：   输入：A = 1, B = 2 输出：&quot;abb&quot; 解释：&quot;abb&quot;, &quot;bab&quot; 和 &quot;bba&quot; 都是正确答案。   示例 2：   输入：A = 4, B = 1 输出：&quot;aabaa&quot;  &nbsp;   提示：    \t0 &lt;= A &lt;= 100 \t0 &lt;= B &lt;= 100 \t对于给定的 A 和 B，保证存在满足要求的 S。   相关话题  [贪心]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Greedy","String"],
        "url": "/problems/string-without-aaa-or-bbb/",
        "teaser": null
      },{
        "title": "查询后的偶数和",
        "excerpt":"985. 查询后的偶数和 (Medium)   给出一个整数数组&nbsp;A&nbsp;和一个查询数组&nbsp;queries。   对于第&nbsp;i&nbsp;次查询，有&nbsp;val =&nbsp;queries[i][0], index&nbsp;= queries[i][1]，我们会把&nbsp;val&nbsp;加到&nbsp;A[index]&nbsp;上。然后，第&nbsp;i&nbsp;次查询的答案是 A 中偶数值的和。   （此处给定的&nbsp;index = queries[i][1]&nbsp;是从 0 开始的索引，每次查询都会永久修改数组&nbsp;A。）   返回所有查询的答案。你的答案应当以数组&nbsp;answer&nbsp;给出，answer[i]&nbsp;为第&nbsp;i&nbsp;次查询的答案。   &nbsp;   示例：   输入：A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]] 输出：[8,6,2,4] 解释： 开始时，数组为 [1,2,3,4]。 将 1 加到 A[0] 上之后，数组为 [2,2,3,4]，偶数值之和为 2 + 2 + 4 = 8。 将 -3 加到 A[1] 上之后，数组为 [2,-1,3,4]，偶数值之和为 2 + 4 = 6。 将 -4 加到 A[0] 上之后，数组为 [-2,-1,3,4]，偶数值之和为 -2 + 4 = 2。 将 2 加到 A[3] 上之后，数组为 [-2,-1,3,6]，偶数值之和为 -2 + 6 = 4。   &nbsp;   提示：    \t1 &lt;= A.length &lt;= 10000 \t-10000 &lt;= A[i] &lt;= 10000 \t1 &lt;= queries.length &lt;= 10000 \t-10000 &lt;= queries[i][0] &lt;= 10000 \t0 &lt;= queries[i][1] &lt; A.length   相关话题  [数组]   [模拟]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Simulation"],
        "url": "/problems/sum-of-even-numbers-after-queries/",
        "teaser": null
      },{
        "title": "数组形式的整数加法",
        "excerpt":"989. 数组形式的整数加法 (Easy)   对于非负整数&nbsp;X&nbsp;而言，X&nbsp;的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果&nbsp;X = 1231，那么其数组形式为&nbsp;[1,2,3,1]。   给定非负整数 X 的数组形式&nbsp;A，返回整数&nbsp;X+K&nbsp;的数组形式。   &nbsp;      示例 1：   输入：A = [1,2,0,0], K = 34 输出：[1,2,3,4] 解释：1200 + 34 = 1234   示例 2：   输入：A = [2,7,4], K = 181 输出：[4,5,5] 解释：274 + 181 = 455   示例 3：   输入：A = [2,1,5], K = 806 输出：[1,0,2,1] 解释：215 + 806 = 1021   示例 4：   输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1 输出：[1,0,0,0,0,0,0,0,0,0,0] 解释：9999999999 + 1 = 10000000000   &nbsp;   提示：    \t1 &lt;= A.length &lt;= 10000 \t0 &lt;= A[i] &lt;= 9 \t0 &lt;= K &lt;= 10000 \t如果&nbsp;A.length &gt; 1，那么&nbsp;A[0] != 0   相关话题  [数组]   [数学]   相似题目     两数相加 (Medium)   加一 (Easy)   二进制求和 (Easy)   字符串相加 (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Math"],
        "url": "/problems/add-to-array-form-of-integer/",
        "teaser": null
      },{
        "title": "二叉树的堂兄弟节点",
        "excerpt":"993. 二叉树的堂兄弟节点 (Easy)   在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。   如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。   我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。   只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。       示例 1：      输入：root = [1,2,3,4], x = 4, y = 3 输出：false   示例 2：      输入：root = [1,2,3,null,4,null,5], x = 5, y = 4 输出：true   示例 3：       输入：root = [1,2,3,null,4], x = 2, y = 3 输出：false      提示：    \t二叉树的节点数介于 2 到 100 之间。 \t每个节点的值都是唯一的、范围为 1 到 100 的整数。       相关话题  [树]   [深度优先搜索]   [广度优先搜索]   [二叉树]   相似题目     二叉树的层序遍历 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Tree","Depth-First Search","Breadth-First Search","Binary Tree"],
        "url": "/problems/cousins-in-binary-tree/",
        "teaser": null
      },{
        "title": "腐烂的橘子",
        "excerpt":"994. 腐烂的橘子 (Medium)   在给定的网格中，每个单元格可以有以下三个值之一：    \t值&nbsp;0&nbsp;代表空单元格； \t值&nbsp;1&nbsp;代表新鲜橘子； \t值&nbsp;2&nbsp;代表腐烂的橘子。   每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。   返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回&nbsp;-1。   &nbsp;   示例 1：      输入：[[2,1,1],[1,1,0],[0,1,1]] 输出：4   示例 2：   输入：[[2,1,1],[0,1,1],[1,0,1]] 输出：-1 解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。   示例 3：   输入：[[0,2]] 输出：0 解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。   &nbsp;   提示：    \t1 &lt;= grid.length &lt;= 10 \t1 &lt;= grid[0].length &lt;= 10 \tgrid[i][j] 仅为&nbsp;0、1&nbsp;或&nbsp;2   相关话题  [广度优先搜索]   [数组]   [矩阵]   相似题目     墙与门 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Breadth-First Search","Array","Matrix"],
        "url": "/problems/rotting-oranges/",
        "teaser": null
      },{
        "title": "找到小镇的法官",
        "excerpt":"997. 找到小镇的法官 (Easy)   在一个小镇里，按从 1 到 n 为 n 个人进行编号。传言称，这些人中有一个是小镇上的秘密法官。   如果小镇的法官真的存在，那么：    \t小镇的法官不相信任何人。 \t每个人（除了小镇法官外）都信任小镇的法官。 \t只有一个人同时满足条件 1 和条件 2 。   给定数组 trust，该数组由信任对 trust[i] = [a, b] 组成，表示编号为 a 的人信任编号为 b 的人。   如果小镇存在秘密法官并且可以确定他的身份，请返回该法官的编号。否则，返回 -1。       示例 1：    输入：n = 2, trust = [[1,2]] 输出：2   示例 2：    输入：n = 3, trust = [[1,3],[2,3]] 输出：3   示例 3：    输入：n = 3, trust = [[1,3],[2,3],[3,1]] 输出：-1   示例 4：    输入：n = 3, trust = [[1,2],[2,3]] 输出：-1   示例 5：    输入：n = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]] 输出：3      提示：    \t1 &lt;= n &lt;= 1000 \t0 &lt;= trust.length &lt;= 104 \ttrust[i].length == 2 \ttrust[i] 互不相同 \ttrust[i][0] != trust[i][1] \t1 &lt;= trust[i][0], trust[i][1] &lt;= n   相关话题  [图]   [数组]   [哈希表]   相似题目     搜寻名人 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Graph","Array","Hash Table"],
        "url": "/problems/find-the-town-judge/",
        "teaser": null
      },{
        "title": "可以被一步捕获的棋子数",
        "excerpt":"999. 可以被一步捕获的棋子数 (Easy)   在一个 8 x 8 的棋盘上，有一个白色的车（Rook），用字符 &#39;R&#39; 表示。棋盘上还可能存在空方块，白色的象（Bishop）以及黑色的卒（pawn），分别用字符 &#39;.&#39;，&#39;B&#39; 和 &#39;p&#39; 表示。不难看出，大写字符表示的是白棋，小写字符表示的是黑棋。   车按国际象棋中的规则移动。东，西，南，北四个基本方向任选其一，然后一直向选定的方向移动，直到满足下列四个条件之一：    \t棋手选择主动停下来。 \t棋子因到达棋盘的边缘而停下。 \t棋子移动到某一方格来捕获位于该方格上敌方（黑色）的卒，停在该方格内。 \t车不能进入/越过已经放有其他友方棋子（白色的象）的方格，停在友方棋子前。   你现在可以控制车移动一次，请你统计有多少敌方的卒处于你的捕获范围内（即，可以被一步捕获的棋子数）。   &nbsp;   示例 1：      输入：[[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;R&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]] 输出：3 解释： 在本例中，车能够捕获所有的卒。   示例 2：      输入：[[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;B&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;p&quot;,&quot;B&quot;,&quot;R&quot;,&quot;B&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;B&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]] 输出：0 解释： 象阻止了车捕获任何卒。   示例 3：      输入：[[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;R&quot;,&quot;.&quot;,&quot;p&quot;,&quot;B&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;B&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]] 输出：3 解释：  车可以捕获位置 b5，d6 和 f5 的卒。   &nbsp;   提示：    \tboard.length == board[i].length == 8 \tboard[i][j] 可以是&nbsp;&#39;R&#39;，&#39;.&#39;，&#39;B&#39;&nbsp;或&nbsp;&#39;p&#39; \t只有一个格子上存在&nbsp;board[i][j] == &#39;R&#39;   相关话题  [数组]   [矩阵]   [模拟]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Matrix","Simulation"],
        "url": "/problems/available-captures-for-rook/",
        "teaser": null
      },{
        "title": "合并石头的最低成本",
        "excerpt":"1000. 合并石头的最低成本 (Hard)   有 N 堆石头排成一排，第 i 堆中有&nbsp;stones[i]&nbsp;块石头。   每次移动（move）需要将连续的&nbsp;K&nbsp;堆石头合并为一堆，而这个移动的成本为这&nbsp;K&nbsp;堆石头的总数。   找出把所有石头合并成一堆的最低成本。如果不可能，返回 -1 。   &nbsp;   示例 1：   输入：stones = [3,2,4,1], K = 2 输出：20 解释： 从 [3, 2, 4, 1] 开始。 合并 [3, 2]，成本为 5，剩下 [5, 4, 1]。 合并 [4, 1]，成本为 5，剩下 [5, 5]。 合并 [5, 5]，成本为 10，剩下 [10]。 总成本 20，这是可能的最小值。   示例 2：   输入：stones = [3,2,4,1], K = 3 输出：-1 解释：任何合并操作后，都会剩下 2 堆，我们无法再进行合并。所以这项任务是不可能完成的。.   示例 3：   输入：stones = [3,5,1,2,6], K = 3 输出：25 解释： 从 [3, 5, 1, 2, 6] 开始。 合并 [5, 1, 2]，成本为 8，剩下 [3, 8, 6]。 合并 [3, 8, 6]，成本为 17，剩下 [17]。 总成本 25，这是可能的最小值。   &nbsp;   提示：    \t1 &lt;= stones.length &lt;= 30 \t2 &lt;= K &lt;= 30 \t1 &lt;= stones[i] &lt;= 100   相关话题  [数组]   [动态规划]   相似题目     戳气球 (Hard)   连接棒材的最低费用 (Medium)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Dynamic Programming"],
        "url": "/problems/minimum-cost-to-merge-stones/",
        "teaser": null
      },{
        "title": "查找常用字符",
        "excerpt":"1002. 查找常用字符 (Easy)   给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。   你可以按任意顺序返回答案。   &nbsp;   示例 1：   输入：[&quot;bella&quot;,&quot;label&quot;,&quot;roller&quot;] 输出：[&quot;e&quot;,&quot;l&quot;,&quot;l&quot;]   示例 2：   输入：[&quot;cool&quot;,&quot;lock&quot;,&quot;cook&quot;] 输出：[&quot;c&quot;,&quot;o&quot;]   &nbsp;   提示：    \t1 &lt;= A.length &lt;= 100 \t1 &lt;= A[i].length &lt;= 100 \tA[i][j] 是小写字母   相关话题  [数组]   [哈希表]   [字符串]   相似题目     两个数组的交集 II (Easy)     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table","String"],
        "url": "/problems/find-common-characters/",
        "teaser": null
      },{
        "title": "K 次取反后最大化的数组和",
        "excerpt":"1005. K 次取反后最大化的数组和 (Easy)   给定一个整数数组 A，我们只能用以下方法修改该数组：我们选择某个索引 i&nbsp;并将 A[i] 替换为 -A[i]，然后总共重复这个过程 K 次。（我们可以多次选择同一个索引 i。）   以这种方式修改数组后，返回数组可能的最大和。   &nbsp;   示例 1：   输入：A = [4,2,3], K = 1 输出：5 解释：选择索引 (1,) ，然后 A 变为 [4,-2,3]。   示例 2：   输入：A = [3,-1,0,2], K = 3 输出：6 解释：选择索引 (1, 2, 2) ，然后 A 变为 [3,1,0,2]。   示例 3：   输入：A = [2,-3,-1,5,-4], K = 2 输出：13 解释：选择索引 (1, 4) ，然后 A 变为 [2,3,-1,5,4]。   &nbsp;   提示：    \t1 &lt;= A.length &lt;= 10000 \t1 &lt;= K &lt;= 10000 \t-100 &lt;= A[i] &lt;= 100   相关话题  [贪心]   [数组]   [排序]     解法  ","categories": ["Leetcode"],
        "tags": ["Greedy","Array","Sorting"],
        "url": "/problems/maximize-sum-of-array-after-k-negations/",
        "teaser": null
      },{
        "title": "十进制整数的反码",
        "excerpt":"1009. 十进制整数的反码 (Easy)   每个非负整数&nbsp;N&nbsp;都有其二进制表示。例如，&nbsp;5&nbsp;可以被表示为二进制&nbsp;&quot;101&quot;，11 可以用二进制&nbsp;&quot;1011&quot;&nbsp;表示，依此类推。注意，除&nbsp;N = 0&nbsp;外，任何二进制表示中都不含前导零。   二进制的反码表示是将每个&nbsp;1&nbsp;改为&nbsp;0&nbsp;且每个&nbsp;0&nbsp;变为&nbsp;1。例如，二进制数&nbsp;&quot;101&quot;&nbsp;的二进制反码为&nbsp;&quot;010&quot;。   给你一个十进制数&nbsp;N，请你返回其二进制表示的反码所对应的十进制整数。   &nbsp;      示例 1：   输入：5 输出：2 解释：5 的二进制表示为 &quot;101&quot;，其二进制反码为 &quot;010&quot;，也就是十进制中的 2 。   示例 2：   输入：7 输出：0 解释：7 的二进制表示为 &quot;111&quot;，其二进制反码为 &quot;000&quot;，也就是十进制中的 0 。   示例 3：   输入：10 输出：5 解释：10 的二进制表示为 &quot;1010&quot;，其二进制反码为 &quot;0101&quot;，也就是十进制中的 5 。   &nbsp;   提示：    \t0 &lt;= N &lt; 10^9 \t本题与 476：https://leetcode-cn.com/problems/number-complement/ 相同   相关话题  [位运算]     解法  ","categories": ["Leetcode"],
        "tags": ["Bit Manipulation"],
        "url": "/problems/complement-of-base-10-integer/",
        "teaser": null
      },{
        "title": "总持续时间可被 60 整除的歌曲",
        "excerpt":"1010. 总持续时间可被 60 整除的歌曲 (Medium)   在歌曲列表中，第 i 首歌曲的持续时间为 time[i] 秒。   返回其总持续时间（以秒为单位）可被 60 整除的歌曲对的数量。形式上，我们希望索引的数字 i 和 j 满足&nbsp; i &lt; j 且有&nbsp;(time[i] + time[j]) % 60 == 0。   &nbsp;   示例 1：   输入：[30,20,150,100,40] 输出：3 解释：这三对的总持续时间可被 60 整数： (time[0] = 30, time[2] = 150): 总持续时间 180 (time[1] = 20, time[3] = 100): 总持续时间 120 (time[1] = 20, time[4] = 40): 总持续时间 60   示例 2：   输入：[60,60,60] 输出：3 解释：所有三对的总持续时间都是 120，可以被 60 整数。   &nbsp;   提示：    \t1 &lt;= time.length &lt;= 60000 \t1 &lt;= time[i] &lt;= 500   相关话题  [数组]   [哈希表]   [计数]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table","Counting"],
        "url": "/problems/pairs-of-songs-with-total-durations-divisible-by-60/",
        "teaser": null
      },{
        "title": "将数组分成和相等的三个部分",
        "excerpt":"1013. 将数组分成和相等的三个部分 (Easy)   给你一个整数数组 arr，只有可以将其划分为三个和相等的 非空 部分时才返回 true，否则返回 false。   形式上，如果可以找出索引 i + 1 &lt; j 且满足 (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1]) 就可以将数组三等分。       示例 1：    输入：arr = [0,2,1,-6,6,-7,9,1,2,0,1] 输出：true 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1   示例 2：    输入：arr = [0,2,1,-6,6,7,9,-1,2,0,1] 输出：false   示例 3：    输入：arr = [3,3,6,5,-2,2,5,1,-9,4] 输出：true 解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4       提示：    \t3 &lt;= arr.length &lt;= 5 * 104 \t-104 &lt;= arr[i] &lt;= 104   相关话题  [贪心]   [数组]     解法  ","categories": ["Leetcode"],
        "tags": ["Greedy","Array"],
        "url": "/problems/partition-array-into-three-parts-with-equal-sum/",
        "teaser": null
      },{
        "title": "可被 5 整除的二进制前缀",
        "excerpt":"1018. 可被 5 整除的二进制前缀 (Easy)   给定由若干&nbsp;0&nbsp;和&nbsp;1&nbsp;组成的数组 A。我们定义&nbsp;N_i：从&nbsp;A[0] 到&nbsp;A[i]&nbsp;的第 i&nbsp;个子数组被解释为一个二进制数（从最高有效位到最低有效位）。   返回布尔值列表&nbsp;answer，只有当&nbsp;N_i&nbsp;可以被 5&nbsp;整除时，答案&nbsp;answer[i] 为&nbsp;true，否则为 false。   &nbsp;   示例 1：   输入：[0,1,1] 输出：[true,false,false] 解释： 输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为真。   示例 2：   输入：[1,1,1] 输出：[false,false,false]   示例 3：   输入：[0,1,1,1,1,1] 输出：[true,false,false,false,true,false]   示例&nbsp;4：   输入：[1,1,1,0,1] 输出：[false,false,false,false,false]   &nbsp;   提示：    \t1 &lt;= A.length &lt;= 30000 \tA[i] 为&nbsp;0&nbsp;或&nbsp;1   相关话题  [数组]     解法  ","categories": ["Leetcode"],
        "tags": ["Array"],
        "url": "/problems/binary-prefix-divisible-by-5/",
        "teaser": null
      },{
        "title": "删除最外层的括号",
        "excerpt":"1021. 删除最外层的括号 (Easy)   有效括号字符串为空 \"\"、\"(\" + A + \")\" 或 A + B ，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。    \t例如，\"\"，\"()\"，\"(())()\" 和 \"(()(()))\" 都是有效的括号字符串。   如果有效字符串 s 非空，且不存在将其拆分为 s = A + B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。   给出一个非空有效字符串 s，考虑将其进行原语化分解，使得：s = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。   对 s 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 s 。       示例 1：    输入：s = \"(()())(())\" 输出：\"()()()\" 解释： 输入字符串为 \"(()())(())\"，原语化分解得到 \"(()())\" + \"(())\"， 删除每个部分中的最外层括号后得到 \"()()\" + \"()\" = \"()()()\"。  示例 2：    输入：s = \"(()())(())(()(()))\" 输出：\"()()()()(())\" 解释： 输入字符串为 \"(()())(())(()(()))\"，原语化分解得到 \"(()())\" + \"(())\" + \"(()(()))\"， 删除每个部分中的最外层括号后得到 \"()()\" + \"()\" + \"()(())\" = \"()()()()(())\"。   示例 3：    输入：s = \"()()\" 输出：\"\" 解释： 输入字符串为 \"()()\"，原语化分解得到 \"()\" + \"()\"， 删除每个部分中的最外层括号后得到 \"\" + \"\" = \"\"。       提示：    \t1 &lt;= s.length &lt;= 105 \ts[i] 为 '(' 或 ')' \ts 是一个有效括号字符串   相关话题  [栈]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Stack","String"],
        "url": "/problems/remove-outermost-parentheses/",
        "teaser": null
      },{
        "title": "从根到叶的二进制数之和",
        "excerpt":"1022. 从根到叶的二进制数之和 (Easy)   给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。例如，如果路径为 0 -&gt; 1 -&gt; 1 -&gt; 0 -&gt; 1，那么它表示二进制数 01101，也就是 13 。   对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。   返回这些数字之和。题目数据保证答案是一个 32 位 整数。       示例 1：     输入：root = [1,0,1,0,1,0,1] 输出：22 解释：(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22   示例 2：    输入：root = [0] 输出：0   示例 3：    输入：root = [1] 输出：1   示例 4：    输入：root = [1,1] 输出：3       提示：    \t树中的结点数介于 1 和 1000 之间。 \tNode.val 为 0 或 1 。   相关话题  [树]   [深度优先搜索]   [二叉树]     解法  ","categories": ["Leetcode"],
        "tags": ["Tree","Depth-First Search","Binary Tree"],
        "url": "/problems/sum-of-root-to-leaf-binary-numbers/",
        "teaser": null
      },{
        "title": "驼峰式匹配",
        "excerpt":"1023. 驼峰式匹配 (Medium)   如果我们可以将小写字母插入模式串&nbsp;pattern&nbsp;得到待查询项&nbsp;query，那么待查询项与给定模式串匹配。（我们可以在任何位置插入每个字符，也可以插入 0 个字符。）   给定待查询列表&nbsp;queries，和模式串&nbsp;pattern，返回由布尔值组成的答案列表&nbsp;answer。只有在待查项&nbsp;queries[i] 与模式串&nbsp;pattern 匹配时，&nbsp;answer[i]&nbsp;才为 true，否则为 false。   &nbsp;   示例 1：   输入：queries = [&quot;FooBar&quot;,&quot;FooBarTest&quot;,&quot;FootBall&quot;,&quot;FrameBuffer&quot;,&quot;ForceFeedBack&quot;], pattern = &quot;FB&quot; 输出：[true,false,true,true,false] 示例： &quot;FooBar&quot; 可以这样生成：&quot;F&quot; + &quot;oo&quot; + &quot;B&quot; + &quot;ar&quot;。 &quot;FootBall&quot; 可以这样生成：&quot;F&quot; + &quot;oot&quot; + &quot;B&quot; + &quot;all&quot;. &quot;FrameBuffer&quot; 可以这样生成：&quot;F&quot; + &quot;rame&quot; + &quot;B&quot; + &quot;uffer&quot;.  示例 2：   输入：queries = [&quot;FooBar&quot;,&quot;FooBarTest&quot;,&quot;FootBall&quot;,&quot;FrameBuffer&quot;,&quot;ForceFeedBack&quot;], pattern = &quot;FoBa&quot; 输出：[true,false,true,false,false] 解释： &quot;FooBar&quot; 可以这样生成：&quot;Fo&quot; + &quot;o&quot; + &quot;Ba&quot; + &quot;r&quot;. &quot;FootBall&quot; 可以这样生成：&quot;Fo&quot; + &quot;ot&quot; + &quot;Ba&quot; + &quot;ll&quot;.   示例 3：   输出：queries = [&quot;FooBar&quot;,&quot;FooBarTest&quot;,&quot;FootBall&quot;,&quot;FrameBuffer&quot;,&quot;ForceFeedBack&quot;], pattern = &quot;FoBaT&quot; 输入：[false,true,false,false,false] 解释：  &quot;FooBarTest&quot; 可以这样生成：&quot;Fo&quot; + &quot;o&quot; + &quot;Ba&quot; + &quot;r&quot; + &quot;T&quot; + &quot;est&quot;.   &nbsp;   提示：    \t1 &lt;= queries.length &lt;= 100 \t1 &lt;= queries[i].length &lt;= 100 \t1 &lt;= pattern.length &lt;= 100 \t所有字符串都仅由大写和小写英文字母组成。   相关话题  [字典树]   [双指针]   [字符串]   [字符串匹配]     解法  ","categories": ["Leetcode"],
        "tags": ["Trie","Two Pointers","String","String Matching"],
        "url": "/problems/camelcase-matching/",
        "teaser": null
      },{
        "title": "除数博弈",
        "excerpt":"1025. 除数博弈 (Easy)   爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。   最初，黑板上有一个数字&nbsp;N&nbsp;。在每个玩家的回合，玩家需要执行以下操作：    \t选出任一&nbsp;x，满足&nbsp;0 &lt; x &lt; N 且&nbsp;N % x == 0&nbsp;。 \t用 N - x&nbsp;替换黑板上的数字 N 。   如果玩家无法执行这些操作，就会输掉游戏。   只有在爱丽丝在游戏中取得胜利时才返回&nbsp;True，否则返回 False。假设两个玩家都以最佳状态参与游戏。   &nbsp;      示例 1：   输入：2 输出：true 解释：爱丽丝选择 1，鲍勃无法进行操作。   示例 2：   输入：3 输出：false 解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。   &nbsp;   提示：    \t1 &lt;= N &lt;= 1000   相关话题  [脑筋急转弯]   [数学]   [动态规划]   [博弈]     解法  ","categories": ["Leetcode"],
        "tags": ["Brainteaser","Math","Dynamic Programming","Game Theory"],
        "url": "/problems/divisor-game/",
        "teaser": null
      },{
        "title": "两地调度",
        "excerpt":"1029. 两地调度 (Medium)   公司计划面试 2n 人。给你一个数组 costs ，其中 costs[i] = [aCosti, bCosti] 。第 i 人飞往 a 市的费用为 aCosti ，飞往 b 市的费用为 bCosti 。   返回将每个人都飞到 a 、b 中某座城市的最低费用，要求每个城市都有 n 人抵达。       示例 1：    输入：costs = [[10,20],[30,200],[400,50],[30,20]] 输出：110 解释： 第一个人去 a 市，费用为 10。 第二个人去 a 市，费用为 30。 第三个人去 b 市，费用为 50。 第四个人去 b 市，费用为 20。  最低总费用为 10 + 30 + 50 + 20 = 110，每个城市都有一半的人在面试。   示例 2：    输入：costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]] 输出：1859   示例 3：    输入：costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]] 输出：3086       提示：    \t2 * n == costs.length \t2 &lt;= costs.length &lt;= 100 \tcosts.length 为偶数 \t1 &lt;= aCosti, bCosti &lt;= 1000   相关话题  [贪心]   [数组]   [排序]     解法  ","categories": ["Leetcode"],
        "tags": ["Greedy","Array","Sorting"],
        "url": "/problems/two-city-scheduling/",
        "teaser": null
      },{
        "title": "有效的回旋镖",
        "excerpt":"1037. 有效的回旋镖 (Easy)   回旋镖定义为一组三个点，这些点各不相同且不在一条直线上。   给出平面上三个点组成的列表，判断这些点是否可以构成回旋镖。   &nbsp;   示例 1：   输入：[[1,1],[2,3],[3,2]] 输出：true   示例 2：   输入：[[1,1],[2,2],[3,3]] 输出：false  &nbsp;   提示：    \tpoints.length == 3 \tpoints[i].length == 2 \t0 &lt;= points[i][j] &lt;= 100   相关话题  [几何]   [数学]     解法  ","categories": ["Leetcode"],
        "tags": ["Geometry","Math"],
        "url": "/problems/valid-boomerang/",
        "teaser": null
      },{
        "title": "困于环中的机器人",
        "excerpt":"1041. 困于环中的机器人 (Medium)   在无限的平面上，机器人最初位于&nbsp;(0, 0)&nbsp;处，面朝北方。机器人可以接受下列三条指令之一：    \t&quot;G&quot;：直走 1 个单位 \t&quot;L&quot;：左转 90 度 \t&quot;R&quot;：右转 90 度   机器人按顺序执行指令&nbsp;instructions，并一直重复它们。   只有在平面中存在环使得机器人永远无法离开时，返回&nbsp;true。否则，返回 false。   &nbsp;   示例 1：   输入：&quot;GGLLGG&quot; 输出：true 解释： 机器人从 (0,0) 移动到 (0,2)，转 180 度，然后回到 (0,0)。 重复这些指令，机器人将保持在以原点为中心，2 为半径的环中进行移动。   示例 2：   输入：&quot;GG&quot; 输出：false 解释： 机器人无限向北移动。   示例 3：   输入：&quot;GL&quot; 输出：true 解释： 机器人按 (0, 0) -&gt; (0, 1) -&gt; (-1, 1) -&gt; (-1, 0) -&gt; (0, 0) -&gt; ... 进行移动。  &nbsp;   提示：    \t1 &lt;= instructions.length &lt;= 100 \tinstructions[i] 在&nbsp;{&#39;G&#39;, &#39;L&#39;, &#39;R&#39;}&nbsp;中   相关话题  [数学]   [字符串]   [模拟]     解法  ","categories": ["Leetcode"],
        "tags": ["Math","String","Simulation"],
        "url": "/problems/robot-bounded-in-circle/",
        "teaser": null
      },{
        "title": "不邻接植花",
        "excerpt":"1042. 不邻接植花 (Medium)   有 n 个花园，按从 1 到 n 标记。另有数组 paths ，其中 paths[i] = [xi, yi] 描述了花园 xi 到花园 yi 的双向路径。在每个花园中，你打算种下四种花之一。   另外，所有花园 最多 有 3 条路径可以进入或离开.   你需要为每个花园选择一种花，使得通过路径相连的任何两个花园中的花的种类互不相同。   以数组形式返回 任一 可行的方案作为答案 answer，其中 answer[i] 为在第 (i+1) 个花园中种植的花的种类。花的种类用  1、2、3、4 表示。保证存在答案。       示例 1：    输入：n = 3, paths = [[1,2],[2,3],[3,1]] 输出：[1,2,3] 解释： 花园 1 和 2 花的种类不同。 花园 2 和 3 花的种类不同。 花园 3 和 1 花的种类不同。 因此，[1,2,3] 是一个满足题意的答案。其他满足题意的答案有 [1,2,4]、[1,4,2] 和 [3,2,1]   示例 2：    输入：n = 4, paths = [[1,2],[3,4]] 输出：[1,2,1,2]   示例 3：    输入：n = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]] 输出：[1,2,3,4]       提示：    \t1 &lt;= n &lt;= 104 \t0 &lt;= paths.length &lt;= 2 * 104 \tpaths[i].length == 2 \t1 &lt;= xi, yi &lt;= n \txi != yi \t每个花园 最多 有 3 条路径可以进入或离开   相关话题  [深度优先搜索]   [广度优先搜索]   [图]     解法  ","categories": ["Leetcode"],
        "tags": ["Depth-First Search","Breadth-First Search","Graph"],
        "url": "/problems/flower-planting-with-no-adjacent/",
        "teaser": null
      },{
        "title": "最后一块石头的重量",
        "excerpt":"1046. 最后一块石头的重量 (Easy)   有一堆石头，每块石头的重量都是正整数。   每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x &lt;= y。那么粉碎的可能结果如下：    \t如果 x == y，那么两块石头都会被完全粉碎； \t如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。   最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。       示例：    输入：[2,7,4,1,8,1] 输出：1 解释： 先选出 7 和 8，得到 1，所以数组转换为 [2,4,1,1,1]， 再选出 2 和 4，得到 2，所以数组转换为 [2,1,1,1]， 接着是 2 和 1，得到 1，所以数组转换为 [1,1,1]， 最后选出 1 和 1，得到 0，最终数组转换为 [1]，这就是最后剩下那块石头的重量。      提示：    \t1 &lt;= stones.length &lt;= 30 \t1 &lt;= stones[i] &lt;= 1000   相关话题  [数组]   [堆（优先队列）]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Heap (Priority Queue)"],
        "url": "/problems/last-stone-weight/",
        "teaser": null
      },{
        "title": "删除字符串中的所有相邻重复项",
        "excerpt":"1047. 删除字符串中的所有相邻重复项 (Easy)   给出由小写字母组成的字符串&nbsp;S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。   在 S 上反复执行重复项删除操作，直到无法继续删除。   在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。   &nbsp;   示例：   输入：&quot;abbaca&quot; 输出：&quot;ca&quot; 解释： 例如，在 &quot;abbaca&quot; 中，我们可以删除 &quot;bb&quot; 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 &quot;aaca&quot;，其中又只有 &quot;aa&quot; 可以执行重复项删除操作，所以最后的字符串为 &quot;ca&quot;。   &nbsp;   提示：    \t1 &lt;= S.length &lt;= 20000 \tS 仅由小写英文字母组成。   相关话题  [栈]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Stack","String"],
        "url": "/problems/remove-all-adjacent-duplicates-in-string/",
        "teaser": null
      },{
        "title": "高度检查器",
        "excerpt":"1051. 高度检查器 (Easy)   学校打算为全体学生拍一张年度纪念照。根据要求，学生需要按照 非递减 的高度顺序排成一行。   排序后的高度情况用整数数组 expected 表示，其中 expected[i] 是预计排在这一行中第 i 位的学生的高度（下标从 0 开始）。   给你一个整数数组 heights ，表示 当前学生站位 的高度情况。heights[i] 是这一行中第 i 位学生的高度（下标从 0 开始）。   返回满足 heights[i] != expected[i] 的 下标数量 。   &nbsp;   示例：    输入：heights =&nbsp;[1,1,4,2,1,3] 输出：3  解释： 高度：[1,1,4,2,1,3] 预期：[1,1,1,2,3,4] 下标 2 、4 、5 处的学生高度不匹配。  示例 2：    输入：heights = [5,1,2,3,4] 输出：5 解释： 高度：[5,1,2,3,4] 预期：[1,2,3,4,5] 所有下标的对应学生高度都不匹配。  示例 3：    输入：heights = [1,2,3,4,5] 输出：0 解释： 高度：[1,2,3,4,5] 预期：[1,2,3,4,5] 所有下标的对应学生高度都匹配。  &nbsp;   提示：    \t1 &lt;= heights.length &lt;= 100 \t1 &lt;= heights[i] &lt;= 100   相关话题  [数组]   [计数排序]   [排序]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Counting Sort","Sorting"],
        "url": "/problems/height-checker/",
        "teaser": null
      },{
        "title": "算法分类",
        "excerpt":"话题分类                  #       Title       标题               #       Title       标题                       1       Array       数组               2       Dynamic Programming       动态规划                 3       Math       数学               4       String       字符串                 5       Tree       树               6       Hash Table       哈希表                 7       Depth-first Search       深度优先搜索               8       Binary Search       二分查找                 9       Two Pointers       双指针               10       Breadth-first Search       广度优先搜索                 11       Greedy       贪心算法               12       Stack       栈                 13       Backtracking       回溯算法               14       Design       设计                 15       Linked List       链表               16       Bit Manipulation       位运算                 17       Heap       堆               18       Sort       排序                 19       Graph       图               20       Union Find       并查集                 21       Divide and Conquer       分治算法               22       Binary Search Tree       二叉搜索树                 23       Trie       字典树               24       Recursion       递归                 25       Queue       队列               26       Segment Tree       线段树                 27       Random                      28       Binary Indexed Tree       树状数组                 29       Minimax       极小化极大               30       Topological Sort       拓扑排序                 31       Brainteaser       脑筋急转弯               32       Geometry       几何                 33       Map                      34       Rejection Sampling                        35       Reservoir Sampling       蓄水池抽样               36       Memoization       记忆化          ","categories": ["Guide"],
        "tags": ["Algorithm"],
        "url": "/guide/leetcode-topic-tag/",
        "teaser": null
      },{
        "title": "字符串的最大公因子",
        "excerpt":"1071. 字符串的最大公因子 (Easy)   对于字符串 S 和 T，只有在 S = T + ... + T（T 自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。   返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。       示例 1：    输入：str1 = \"ABCABC\", str2 = \"ABC\" 输出：\"ABC\"   示例 2：    输入：str1 = \"ABABAB\", str2 = \"ABAB\" 输出：\"AB\"   示例 3：    输入：str1 = \"LEET\", str2 = \"CODE\" 输出：\"\"       提示：    \t1 &lt;= str1.length &lt;= 1000 \t1 &lt;= str2.length &lt;= 1000 \tstr1[i] 和 str2[i] 为大写英文字母   相关话题  [数学]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Math","String"],
        "url": "/problems/greatest-common-divisor-of-strings/",
        "teaser": null
      },{
        "title": "IP 地址无效化",
        "excerpt":"1108. IP 地址无效化 (Easy)   给你一个有效的 IPv4 地址&nbsp;address，返回这个 IP 地址的无效化版本。   所谓无效化&nbsp;IP 地址，其实就是用&nbsp;&quot;[.]&quot;&nbsp;代替了每个 &quot;.&quot;。   &nbsp;   示例 1：   输入：address = &quot;1.1.1.1&quot; 输出：&quot;1[.]1[.]1[.]1&quot;   示例 2：   输入：address = &quot;255.100.50.0&quot; 输出：&quot;255[.]100[.]50[.]0&quot;   &nbsp;   提示：    \t给出的&nbsp;address&nbsp;是一个有效的 IPv4 地址   相关话题  [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/defanging-an-ip-address/",
        "teaser": null
      },{
        "title": "字符集和字符编码",
        "excerpt":"基础知识  计算机中储存的信息都是用二进制数表示的；而我们在屏幕上看到的汉字,英文等字符是二进制数转换之后的结果。 通俗的说，按照何种规则将字符存储在计算机中，如’a’用什么表示，称为”编码”； 反之，将存储在计算机中的二进制数解析显示出来，称为”解码”。在解码过程中，如果使用了错误的解码规则， 则导致’a’解析成’b’或者乱码。   字符集（Charset）：是一个系统支持的所有抽象字符的集合。字符是各种文字和符号的总称，包括各国家文字、标点符号、图形符号、数字等。   字符编码（Character Encoding）：也称字集码，是把字符集中的字符编码为指定集合中某一对象（例如：比特模式、自然数序列、8位组或者电脉冲），以便文本在计算机中存储和通过通信网络的传递。   常用字符集和字符编码  常见字符集名称：ASCII字符集、GB2312字符集、BIG5字符集、 GB18030字符集、Unicode字符集等。   UCS：通用字符集（Universal Character Set，UCS）是由ISO制定的ISO 10646（或称ISO/IEC 10646）标准所定义的字符编码方式，采用4字节编码。   通用字符集是与UNICODE同类的组织，UCS-2和UNICODE兼容。 位数：它有UCS-2和UCS-4两种格式，分别是2字节和4字节。 范围：UCS-4只是在UCS-2前面加了0×0000。   UNICODE字符集   作用：为世界650种语言进行统一编码，兼容ISO-8859-1。   位数：UNICODE字符集有多个编码方式，分别是UTF-8，UTF-16和UTF-32。   EUC-CN：EUC-CN是GB2312最常用的表示方法。浏览器编码表上的“GB2312”，通常都是指“EUC-CN”表示法。   CP936: GBK是对GB2312-80的扩展，也就是CP936字码表（Code Page 936）的扩展（之前CP936和GB 2312-80一模一样）， 最早实现于Windows 95简体中文版。虽然GBK收录GB 13000.1-93的全部字符，但GBK是一种编码方式并向下兼容GB2312； 而GB 13000.1-93等同于Unicode 1.1是一种字符集，它的几种编码方式如UTF8、UTF16LE等，与GBK完全不兼容。   GB18030：国家标准GB18030-2000《信息交换用汉字编码字符集基本集的补充》是我国继GB2312-1980和GB13000-1993之后最重要的汉字编码标准，是我国计算机系统必须遵循的基础性标准之一。   GB18030-2000编码标准是由信息产业部和国家质量技术监督局在2000年 3月17日联合发布的，并且将作为一项国家标准在2001年的1月正式强制执行。   GB18030-2005《信息技术中文编码字符集》是我国制订的以汉字为主并包含多种我国少数民族文字（如藏、蒙古、傣、彝、朝鲜、维吾尔文等）的超大型中文编码字符集强制性标准，其中收入汉字70000余个。   UTF-8：UTF-8（8-bit Unicode Transformation Format）是一种针对Unicode的可变长度字符编码，又称万国码，由Ken Thompson于1992年创建。现在已经标准化为RFC 3629。UTF-8用1到6个字节编码Unicode字符。用在网页上可以统一页面显示中文简体繁体及其它语言（如英文，日文，韩文）。  ","categories": ["Computer"],
        "tags": ["Charset","Encoding"],
        "url": "/computer/charset-and-character-encoding/",
        "teaser": null
      },{
        "title": "如何快速判断一个数是不是2的幂、3的幂、4的幂",
        "excerpt":"判断n是否为2的幂   2的0次幂为1，2的1次幂为2，2的2次幂为4……，对应的二进制表示为0b1，0b10，0b100……，任何整数乘以2，都相当于向左移动了一位。 这样，2的幂的特征就是其二进制表示只有最高位为1，其他位均为0。那么，我们只要判断一个数的二进制表示只有一个1，那么它就是2的幂。   n为整数，则n &amp; (n - 1)可以消除n二进制表示的最低位的1，这个方法可以用来统计一个数二进制中1的个数，当然也可以用来判断是否为2的幂。   Go语言实现如下：  func isPowerOfTwo(n int) bool {  return n &gt; 0 &amp;&amp; n&amp;(n-1) == 0 }   判断n是否为4的幂   4的0次幂为1，4的1次幂为4，4的2次幂为16……，对应的二进制表示为0b1，0b100，0b10000……， 4的幂首先是2的幂，因为4^n = （2^2）^n，和判断n是否为2的幂唯一的不同是，4的幂的二进制表示中，1全在奇数位上。 所以进一步判断其与0x55555555按位与的结果，0x55555555是十六进制表示，换成二进制表示，可以发现，其奇数位上全是1， 那么如果相与结果为其本身，则是4的幂，否则不是。   Go语言实现如下：  func isPowerOfFour(n int) bool { \treturn n&amp;(n-1) == 0 &amp;&amp; n&amp;0x55555555 &gt; 0 }   判断n是否为3的幂   3的0次幂为1，3的1次幂为3，3的2次幂为9，3的3次幂为27……， 3的幂的特点是如果一个整数N是3的幂，那么其所有约数都是3的幂。 那么，换一个角度，如果n是N的约数，那么其一定是3的幂。   int型数值最大值为2^31-1 = 2147483647 = 0x7fffffff，则int型数值中3的最大幂如下：  // math.MaxInt32 = 2^31-1 max := math.Pow(3, math.Floor(math.Log(math.MaxInt32)/math.Log(3))) fmt.Println(int(max)) // Output: // 1162261467   Go语言实现如下：  func isPowerOfFour(n int) bool { \treturn n &gt; 0 &amp;&amp; 1162261467%n == 0 }  ","categories": ["Algorithm"],
        "tags": ["Math"],
        "url": "/algorithm/power-of-two-three-four/",
        "teaser": null
      },{
        "title": "一年中的第几天",
        "excerpt":"1154. 一年中的第几天 (Easy)   给你一个按 YYYY-MM-DD 格式表示日期的字符串&nbsp;date，请你计算并返回该日期是当年的第几天。   通常情况下，我们认为 1 月 1 日是每年的第 1 天，1 月 2 日是每年的第 2 天，依此类推。每个月的天数与现行公元纪年法（格里高利历）一致。   &nbsp;   示例 1：   输入：date = &quot;2019-01-09&quot; 输出：9   示例 2：   输入：date = &quot;2019-02-10&quot; 输出：41   示例 3：   输入：date = &quot;2003-03-01&quot; 输出：60   示例 4：   输入：date = &quot;2004-03-01&quot; 输出：61  &nbsp;   提示：    \tdate.length == 10 \tdate[4] == date[7] == &#39;-&#39;，其他的&nbsp;date[i]&nbsp;都是数字。 \tdate 表示的范围从 1900 年 1 月 1 日至 2019 年 12 月 31 日。   相关话题  [数学]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Math","String"],
        "url": "/problems/day-of-the-year/",
        "teaser": null
      },{
        "title": "内网主机无法通过公网访问内网服务",
        "excerpt":"问题产生原因分析      网络环境介绍   公司内网有一台web服务器，地址是192.168.100.100，web服务端口为80，并且为这台web服务器申请了DNS A记录的域名解析服务， 解析记录是公司出口ip地址100.100.100.100。在办公区网络环境里，还有内网192.168.10.0网段，需要通过申请的域名来访问公司内网的192.168.100.100的web服务。   做法是在防火墙的出口，做一条端口映射，100.100.100.100:80到192.168.100.100:80的端口映射。 问题来了，做好端口映射以后，其他外部网络通过域名访问公司的web服务是正常的，但是公司内网用户通过域名访问公司自己的web服务，却无法访问； 而公司内网用户通过192.168.100.100:80私有地址访问，是正常的。 这种情况，就是因为做好端口映射以后，访问web服务的流量在响应的时候流量没有回流到防火墙导致的。   原因分析   如上图，假如是192.168.10.10通过申请的域名访问192.168.100.100的web服务。这里假设访问的源端口是10000，目标端口是80，数据包分析如下：   C2主机发起web请求.因为通过域名访问的，DNS解析服务正常，那么访问目标就是100.100.100.100:80   192.168.10.10:10000—&gt;100.100.100.100:80   数据包最终会被路由到防火墙上，防火墙检查访问的目的地址，匹配到它的端口映射策略，将目标地址改为对192.168.100.100的访问，建立起一个针对目标ip地址转换的NAT会话表   192.168.10.10:10000—&gt;192.168.100.100:80   然后数据包到会被转发到192.168.100.100服务器上并会响应192.168.10.10主机的请求，将上述访问的源目ip地址及端口进行倒转，并将数据包交给它的网关处理，图中就是R1路由器   192.168.100.100:80—&gt;192.168.10.10:10000   R1路由器检查访问者的源ip和目标ip地址，发现目标ip地址是192.168.10.10，是R1路由器一个可路由的内网ip地址，就会将数据包直接路由到C2主机上 C2主机接收到数据包，检查数据包的源ip和端口是192.168.100.100:80，发现其本身并没有这样一个http会话与之相匹配， 就是说C2主机并没有主动发起对192.168.100.100:80的访问，发起的是对100.100.100.100:80的访问，那么C2主机就会丢弃这个数据包， 导致内网用户通过域名或者公网ip地址访问自己的内网服务器不通的现象。   192.168.100.100:80—&gt;192.168.10.10:10000   上述就是造成我们开头所说问题的原因。发生上述问题的原因，就是因为其R1路由器发现响应数据包的目的ip地址是内网一个可直接路由的地址， 就会直接在内网进行路由转发，而不是将数据包交给防火墙进行路由转发。   不要认为这是bug，这是正常现象，任何设备只要做了端口映射，都绕不开这个问题，因为TCP/IP协议栈就是这样工作的。 你要推倒重来，除非自己去设计一套网络协议标准，况且在现有的TCP/IP的协议框架下，这个问题又不是说不能解决。那为何有的设备不用做端口回流呢？ 那是因为有的设备在你做端口映射的时候，偷偷地把端口回流的问题也给你解决了。然而你也不要以为它们帮你做了端口回流，你就认为那些设备是好设备， 感觉好高端，那你错了，我很少见企业级设备偷偷地帮你解决这个问题的(不是说没有，一般是应用层网络设备有这个)，都是需要你主动去处理解决， 这也体现了它们设备高度可定制性及扩展性。   你要高度可定制性和扩展性，那就要牺牲人性化的设计，需要专业人员去帮你做业务上的定制；你要人性化，自己点点鼠标就能把问题解决，那它就不可能在可定制性和扩展性上给你太多，这个世界上的事情也是如此，没有十全十美。   解决方法   这里只介绍其中一种解决思路，如何解决，可以自行查阅相关资料，解决的原理都一样。还有其他方法，可以自行查阅相关资料。   解决方法的思路：内网主机在访问的时候，将web服务的响应流量回流到防火墙上来，接受防火墙的处理。 就是说，在流量经过防火墙的时候，将源地址做一个修改，使得R1路由器在路由数据包的时候，还把这个数据包路由到防火墙上来，而不是在内网直接路由； 防火墙上有记录它所做的相应修改（做源地址转换，并维护这个NAT会话表即可），再把之前的修改给改回来，再转发给内网主机即可。   内网主机对通过公网对内网服务器访问的时候，流量在经过防火墙时，将内网主机的ip地址修改为一个外网ip地址（源NAT转换）， 并做好及维护相应的NAT会话的记录，这样服务器在接收到数据包之后，发现源ip地址是一个外网ip地址，这样数据流量会回流到防火墙， 防火墙检查相应的源NAT转换策略，发现可以匹配，则进行源NAT的还原，并经数据包路由到内网的主机中。     [原文链接]  ","categories": ["Network"],
        "tags": ["Network"],
        "url": "/network/internal-host-cannot-access-the-intranet-service-through-public-network/",
        "teaser": null
      },{
        "title": "按字典序排在最后的子串",
        "excerpt":"1163. 按字典序排在最后的子串 (Hard)   给你一个字符串&nbsp;s，找出它的所有子串并按字典序排列，返回排在最后的那个子串。   &nbsp;   示例 1：   输入：&quot;abab&quot; 输出：&quot;bab&quot; 解释：我们可以找出 7 个子串 [&quot;a&quot;, &quot;ab&quot;, &quot;aba&quot;, &quot;abab&quot;, &quot;b&quot;, &quot;ba&quot;, &quot;bab&quot;]。按字典序排在最后的子串是 &quot;bab&quot;。   示例&nbsp;2：   输入：&quot;leetcode&quot; 输出：&quot;tcode&quot;   &nbsp;   提示：    \t1 &lt;= s.length &lt;= 4 * 10^5 \ts 仅含有小写英文字符。   相关话题  [双指针]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Two Pointers","String"],
        "url": "/problems/last-substring-in-lexicographical-order/",
        "teaser": null
      },{
        "title": "Linux的用户和用户组管理",
        "excerpt":"Linux系统是一个多用户多任务的分时操作系统，任何一个要使用系统资源的用户，都必须首先向系统管理员申请一个账号，然后以这个账号的身份进入系统。   用户的账号一方面可以帮助系统管理员对使用系统的用户进行跟踪，并控制他们对系统资源的访问；另一方面也可以帮助用户组织文件，并为用户提供安全性保护。   每个用户账号都拥有一个惟一的用户名和各自的口令。   用户在登录时键入正确的用户名和口令后，就能够进入系统和自己的主目录。   实现用户账号的管理，要完成的工作主要有如下几个方面：      用户账号的添加、删除与修改。   用户口令的管理。   用户组的管理。   Linux系统用户账号的管理   用户账号的管理工作主要涉及到用户账号的添加、修改和删除。   添加用户账号就是在系统中创建一个新账号，然后为新账号分配用户号、用户组、主目录和登录Shell等资源。刚添加的账号是被锁定的，无法使用。   1、添加新的用户账号使用useradd命令，其语法如下：   # useradd 选项 用户名   参数说明：   选项:     -c comment 指定一段注释性描述。     -d 目录 指定用户主目录，如果此目录不存在，则同时使用-m选项，可以创建主目录。     -g 用户组 指定用户所属的用户组。     -G 用户组，用户组 指定用户所属的附加组。     -s Shell文件 指定用户的登录Shell。     -u 用户号 指定用户的用户号，如果同时有-o选项，则可以重复使用其他用户的标识号。      用户名:     指定新账号的登录名。   实例1   # useradd –d /usr/sam -m sam  此命令创建了一个用户sam，其中-d和-m选项用来为登录名sam产生一个主目录/usr/sam（/usr为默认的用户主目录所在的父目录）。   实例2   # useradd -s /bin/sh -g group –G adm,root gem   此命令新建了一个用户gem，该用户的登录Shell是 /bin/sh，它属于group用户组，同时又属于adm和root用户组，其中group用户组是其主组。   这里可能新建组：# groupadd group及groupadd adm   增加用户账号就是在/etc/passwd文件中为新用户增加一条记录，同时更新其他系统文件如/etc/shadow, /etc/group等。   Linux提供了集成的系统管理工具userconf，它可以用来对用户账号进行统一管理。   2、删除帐号   如果一个用户的账号不再使用，可以从系统中删除。删除用户账号就是要将/etc/passwd等系统文件中的该用户记录删除，必要时还删除用户的主目录。   删除一个已有的用户账号使用userdel命令，其格式如下：   # userdel 选项 用户名   常用的选项是 -r，它的作用是把用户的主目录一起删除。   例如：   # userdel -r sam   此命令删除用户sam在系统文件中（主要是/etc/passwd, /etc/shadow, /etc/group等）的记录，同时删除用户的主目录。   3、修改帐号   修改用户账号就是根据实际情况更改用户的有关属性，如用户号、主目录、用户组、登录Shell等。   修改已有用户的信息使用usermod命令，其格式如下：   # usermod 选项 用户名   常用的选项包括-c, -d, -m, -g, -G, -s, -u以及-o等，这些选项的意义与useradd命令中的选项一样，可以为用户指定新的资源值。   另外，有些系统可以使用选项：-l 新用户名   这个选项指定一个新的账号，即将原来的用户名改为新的用户名。   例如：   # usermod -s /bin/ksh -d /home/z –g developer sam   此命令将用户sam的登录Shell修改为ksh，主目录改为/home/z，用户组改为developer。   4、用户口令的管理   用户管理的一项重要内容是用户口令的管理。用户账号刚创建时没有口令，但是被系统锁定，无法使用，必须为其指定口令后才可以使用，即使是指定空口令。   指定和修改用户口令的Shell命令是passwd。超级用户可以为自己和其他用户指定口令，普通用户只能用它修改自己的口令。命令的格式为：   # passwd 选项 用户名   可使用的选项：       -l 锁定口令，即禁用账号。     -u 口令解锁。     -d 使账号无口令。     -f 强迫用户下次登录时修改口令。   如果默认用户名，则修改当前用户的口令。   例如，假设当前用户是sam，则下面的命令修改该用户自己的口令：   $ passwd  Old password:******  New password:*******  Re-enter new password:*******   如果是超级用户，可以用下列形式指定任何用户的口令：   # passwd sam  New password:*******  Re-enter new password:*******   普通用户修改自己的口令时，passwd命令会先询问原口令，验证后再要求用户输入两遍新口令，如果两次输入的口令一致，则将这个口令指定给用户；而超级用户为用户指定口令时，就不需要知道原口令。   为了系统安全起见，用户应该选择比较复杂的口令，例如最好使用8位长的口令，口令中包含有大写、小写字母和数字，并且应该与姓名、生日等不相同。   为用户指定空口令时，执行下列形式的命令：   # passwd -d sam   此命令将用户sam的口令删除，这样用户sam下一次登录时，系统就不再询问口令。   passwd命令还可以用-l(lock)选项锁定某一用户，使其不能登录，例如：   # passwd -l sam   二、Linux系统用户组的管理   每个用户都有一个用户组，系统可以对一个用户组中的所有用户进行集中管理。不同Linux 系统对用户组的规定有所不同，如Linux下的用户属于与它同名的用户组，这个用户组在创建用户时同时创建。   用户组的管理涉及用户组的添加、删除和修改。组的增加、删除和修改实际上就是对/etc/group文件的更新。   1、增加一个新的用户组使用groupadd命令。其格式如下：   # groupadd 选项 用户组   可以使用的选项有：       -g GID 指定新用户组的组标识号（GID）。     -o 一般与-g选项同时使用，表示新用户组的GID可以与系统已有用户组的GID相同。   实例1：   # groupadd group1   此命令向系统中增加了一个新组group1，新组的组标识号是在当前已有的最大组标识号的基础上加1。   实例2：   # groupadd -g 101 group2   此命令向系统中增加了一个新组group2，同时指定新组的组标识号是101。   2、如果要删除一个已有的用户组，使用 groupdel 命令，其格式如下：   # groupdel 用户组   例如：   # groupdel group1   此命令从系统中删除组group1。   3、修改用户组的属性使用 groupmod 命令。其语法如下：   # groupmod 选项 用户组   常用的选项有：       -g GID 为用户组指定新的组标识号。     -o 与-g选项同时使用，用户组的新GID可以与系统已有用户组的GID相同。     -n新用户组 将用户组的名字改为新名字   实例1：   # groupmod -g 102 group2   此命令将组group2的组标识号修改为102。   实例2：   # groupmod –g 10000 -n group3 group2   此命令将组group2的标识号改为10000，组名修改为group3。   4、如果一个用户同时属于多个用户组，那么用户可以在用户组之间切换，以便具有其他用户组的权限。   用户可以在登录后，使用命令 newgrp 切换到其他用户组，这个命令的参数就是目的用户组。例如：   $ newgrp root   这条命令将当前用户切换到root用户组，前提条件是root用户组确实是该用户的主组或附加组。类似于用户账号的管理，用户组的管理也可以通过集成的系统管理工具来完成。   三、与用户账号有关的系统文件   完成用户管理的工作有许多种方法，但是每一种方法实际上都是对有关的系统文件进行修改。   与用户和用户组相关的信息都存放在一些系统文件中，这些文件包括/etc/passwd, /etc/shadow, /etc/group等。   下面分别介绍这些文件的内容。   1、/etc/passwd 文件是用户管理工作涉及的最重要的一个文件。   Linux系统中的每个用户都在/etc/passwd文件中有一个对应的记录行，它记录了这个用户的一些基本属性。   这个文件对所有用户都是可读的。它的内容类似下面的例子：   ＃ cat /etc/passwd  root:x:0:0:root:/root:/bin/bash bin:x:1:1:bin:/bin:/sbin/nologin daemon:x:2:2:daemon:/sbin:/sbin/nologin adm:x:3:4:adm:/var/adm:/sbin/nologin lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin sync:x:5:0:sync:/sbin:/bin/sync shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown halt:x:7:0:halt:/sbin:/sbin/halt mail:x:8:12:mail:/var/spool/mail:/sbin/nologin operator:x:11:0:operator:/root:/sbin/nologin games:x:12:100:games:/usr/games:/sbin/nologin ftp:x:14:50:FTP User:/var/ftp:/sbin/nologin nobody:x:99:99:Nobody:/:/sbin/nologin systemd-network:x:192:192:systemd Network Management:/:/sbin/nologin dbus:x:81:81:System message bus:/:/sbin/nologin polkitd:x:999:998:User for polkitd:/:/sbin/nologin sshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin postfix:x:89:89::/var/spool/postfix:/sbin/nologin chrony:x:998:996::/var/lib/chrony:/sbin/nologin ntp:x:38:38::/etc/ntp:/sbin/nologin tcpdump:x:72:72::/:/sbin/nologin nscd:x:28:28:NSCD Daemon:/:/sbin/nologin shuo:x:1000:1000::/home/shuo:/bin/bash tss:x:59:59:Account used by the trousers package to sandbox the tcsd daemon:/dev/null:/sbin/nologin nginx:x:997:995:Nginx web server:/var/lib/nginx:/sbin/nologin apache:x:48:48:Apache:/usr/share/httpd:/sbin/nologin mysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/false redis:x:996:994:Redis Database Server:/var/lib/redis:/sbin/nologin   从上面的例子我们可以看到，/etc/passwd中一行记录对应着一个用户，每行记录又被冒号(:)分隔为7个字段，其格式和具体含义如下：   用户名:口令:用户标识号:组标识号:注释性描述:主目录:登录Shell   1）“用户名”是代表用户账号的字符串。   通常长度不超过8个字符，并且由大小写字母和/或数字组成。登录名中不能有冒号(:)，因为冒号在这里是分隔符。   为了兼容起见，登录名中最好不要包含点字符(.)，并且不使用连字符(-)和加号(+)打头。   2）“口令”一些系统中，存放着加密后的用户口令字。  虽然这个字段存放的只是用户口令的加密串，不是明文，但是由于/etc/passwd文件对所有用户都可读，所以这仍是一个安全隐患。因此，现在许多Linux 系统（如SVR4）都使用了shadow技术，把真正的加密后的用户口令字存放到/etc/shadow文件中，而在/etc/passwd文件的口令字段中只存放一个特殊的字符，例如“x”或者“*”。   3）“用户标识号”是一个整数，系统内部用它来标识用户。  一般情况下它与用户名是一一对应的。如果几个用户名对应的用户标识号是一样的，系统内部将把它们视为同一个用户，但是它们可以有不同的口令、不同的主目录以及不同的登录Shell等。   通常用户标识号的取值范围是0～65 535。0是超级用户root的标识号，1～99由系统保留，作为管理账号，普通用户的标识号从100开始。在Linux系统中，这个界限是500。   4）“组标识号”字段记录的是用户所属的用户组。  它对应着/etc/group文件中的一条记录。   5)“注释性描述”字段记录着用户的一些个人情况。  例如用户的真实姓名、电话、地址等，这个字段并没有什么实际的用途。在不同的Linux 系统中，这个字段的格式并没有统一。在许多Linux系统中，这个字段存放的是一段任意的注释性描述文字，用做finger命令的输出。   6)“主目录”，也就是用户的起始工作目录。  它是用户在登录到系统之后所处的目录。在大多数系统中，各用户的主目录都被组织在同一个特定的目录下，而用户主目录的名称就是该用户的登录名。各用户对自己的主目录有读、写、执行（搜索）权限，其他用户对此目录的访问权限则根据具体情况设置。   7)用户登录后，要启动一个进程，负责将用户的操作传给内核，这个进程是用户登录到系统后运行的命令解释器或某个特定的程序，即Shell。  Shell是用户与Linux系统之间的接口。Linux的Shell有许多种，每种都有不同的特点。常用的有sh(Bourne Shell), csh(C Shell), ksh(Korn Shell), tcsh(TENEX/TOPS-20 type C Shell), bash(Bourne Again Shell)等。   系统管理员可以根据系统情况和用户习惯为用户指定某个Shell。如果不指定Shell，那么系统使用sh为默认的登录Shell，即这个字段的值为/bin/sh。   用户的登录Shell也可以指定为某个特定的程序（此程序不是一个命令解释器）。   利用这一特点，我们可以限制用户只能运行指定的应用程序，在该应用程序运行结束后，用户就自动退出了系统。有些Linux 系统要求只有那些在系统中登记了的程序才能出现在这个字段中。   8)系统中有一类用户称为伪用户（pseudo users）。  这些用户在/etc/passwd文件中也占有一条记录，但是不能登录，因为它们的登录Shell为空。它们的存在主要是方便系统管理，满足相应的系统进程对文件属主的要求。   常见的伪用户如下所示：   伪 用 户 含 义  bin 拥有可执行的用户命令文件  sys 拥有系统文件  adm 拥有帐户文件  uucp UUCP使用  lp lp或lpd子系统使用  nobody NFS使用   拥有帐户文件   1、除了上面列出的伪用户外，还有许多标准的伪用户，例如：audit, cron, mail, usenet等，它们也都各自为相关的进程和文件所需要。   由于/etc/passwd文件是所有用户都可读的，如果用户的密码太简单或规律比较明显的话，一台普通的计算机就能够很容易地将它破解，因此对安全性要求较高的Linux系统都把加密后的口令字分离出来，单独存放在一个文件中，这个文件是/etc/shadow文件。 有超级用户才拥有该文件读权限，这就保证了用户密码的安全性。   2、/etc/shadow中的记录行与/etc/passwd中的一一对应，它由pwconv命令根据/etc/passwd中的数据自动产生   它的文件格式与/etc/passwd类似，由若干个字段组成，字段之间用”:”隔开。这些字段是：   登录名:加密口令:最后一次修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:标志      “登录名”是与/etc/passwd文件中的登录名相一致的用户账号   “口令”字段存放的是加密后的用户口令字，长度为13个字符。如果为空，则对应用户没有口令，登录时不需要口令；如果含有不属于集合 { ./0-9A-Za-z }中的字符，则对应的用户不能登录。   “最后一次修改时间”表示的是从某个时刻起，到用户最后一次修改口令时的天数。时间起点对不同的系统可能不一样。例如在SCO Linux 中，这个时间起点是1970年1月1日。   “最小时间间隔”指的是两次修改口令之间所需的最小天数。   “最大时间间隔”指的是口令保持有效的最大天数。   “警告时间”字段表示的是从系统开始警告用户到用户密码正式失效之间的天数。   “不活动时间”表示的是用户没有登录活动但账号仍能保持有效的最大天数。   “失效时间”字段给出的是一个绝对的天数，如果使用了这个字段，那么就给出相应账号的生存期。期满后，该账号就不再是一个合法的账号，也就不能再用来登录了。   下面是/etc/shadow的一个例子：   # cat /etc/shadow  root:$6$mOPGI/4mmx$nlQ9eaoshKlgwQNWuPeS0knX3ppJw2ohWd.EHm/YTwVjEVRDxDdsDtn28Fa7IBlQ0oHYFL2a5rJdvPn56lS7N0:17963:0:99999:7::: bin:*:17834:0:99999:7::: daemon:*:17834:0:99999:7::: adm:*:17834:0:99999:7::: lp:*:17834:0:99999:7::: sync:*:17834:0:99999:7::: shutdown:*:17834:0:99999:7::: halt:*:17834:0:99999:7::: mail:*:17834:0:99999:7::: operator:*:17834:0:99999:7::: games:*:17834:0:99999:7::: ftp:*:17834:0:99999:7::: nobody:*:17834:0:99999:7::: systemd-network:!!:17942:::::: dbus:!!:17942:::::: polkitd:!!:17942:::::: sshd:!!:17942:::::: postfix:!!:17942:::::: chrony:!!:17942:::::: ntp:!!:17942:::::: tcpdump:!!:17942:::::: nscd:!!:17942:::::: shuo:$6$7TQM5xp2$h0y1LAQSxbdn3DM6yLAEvpi6osN6XjLX4jXT4g/KJ0.2VmtcW.3FAxg/0RZERbeKW52BK1/AM3S3uwrS6Yrh2.:17963:0:99999:7::: tss:!!:17963:::::: nginx:!!:17963:::::: apache:!!:17965:::::: mysql:!!:17968:::::: redis:!!:17968::::::   3、用户组的所有信息都存放在/etc/group文件中。   将用户分组是Linux 系统中对用户进行管理及控制访问权限的一种手段。   每个用户都属于某个用户组；一个组中可以有多个用户，一个用户也可以属于不同的组。   当一个用户同时是多个组中的成员时，在/etc/passwd文件中记录的是用户所属的主组，也就是登录时所属的默认组，而其他组称为附加组。   用户要访问属于附加组的文件时，必须首先使用newgrp命令使自己成为所要访问的组中的成员。   用户组的所有信息都存放在/etc/group文件中。此文件的格式也类似于/etc/passwd文件，由冒号(:)隔开若干个字段，这些字段有：   组名:口令:组标识号:组内用户列表      “组名”是用户组的名称，由字母或数字构成。与/etc/passwd中的登录名一样，组名不应重复。   “口令”字段存放的是用户组加密后的口令字。一般Linux 系统的用户组都没有口令，即这个字段一般为空，或者是*。   “组标识号”与用户标识号类似，也是一个整数，被系统内部用来标识组。   “组内用户列表”是属于这个组的所有用户的列表/b]，不同用户之间用逗号(,)分隔。这个用户组可能是用户的主组，也可能是附加组。   /etc/group文件的一个例子如下：  # cat /etc/group  root:x:0: bin:x:1: daemon:x:2: sys:x:3: adm:x:4: tty:x:5: disk:x:6: lp:x:7: mem:x:8: kmem:x:9: wheel:x:10:shuo cdrom:x:11: mail:x:12:postfix man:x:15: dialout:x:18: floppy:x:19: games:x:20: tape:x:33: video:x:39: ftp:x:50: lock:x:54: audio:x:63: nobody:x:99: users:x:100: utmp:x:22: utempter:x:35: input:x:999: systemd-journal:x:190: systemd-network:x:192: dbus:x:81: polkitd:x:998: ssh_keys:x:997: sshd:x:74: postdrop:x:90: postfix:x:89: chrony:x:996: ntp:x:38: tcpdump:x:72: nscd:x:28: shuo:x:1000: tss:x:59: nginx:x:995: apache:x:48: mysql:x:27: redis:x:994:   四、添加批量用户   添加和删除用户对每位Linux系统管理员都是轻而易举的事，比较棘手的是如果要添加几十个、上百个甚至上千个用户时，我们不太可能还使用useradd一个一个地添加， 必然要找一种简便的创建大量用户的方法。Linux系统提供了创建大量用户的工具，可以让您立即创建大量用户，方法如下：   （1）先编辑一个文本用户文件。   每一列按照/etc/passwd密码文件的格式书写，要注意每个用户的用户名、UID、宿主目录都不可以相同，其中密码栏可以留做空白或输入x号。一个范例文件user.txt内容如下：   user001::600:100:user:/home/user001:/bin/bash user002::601:100:user:/home/user002:/bin/bash user003::602:100:user:/home/user003:/bin/bash user004::603:100:user:/home/user004:/bin/bash user005::604:100:user:/home/user005:/bin/bash user006::605:100:user:/home/user006:/bin/bash   （2）以root身份执行命令 /usr/sbin/newusers，从刚创建的用户文件user.txt中导入数据，创建用户：   # newusers &lt; user.txt   然后可以执行命令 vipw 或 vi /etc/passwd 检查 /etc/passwd 文件是否已经出现这些用户的数据，并且用户的宿主目录是否已经创建。   （3）执行命令/usr/sbin/pwunconv。   将 /etc/shadow 产生的 shadow 密码解码，然后回写到 /etc/passwd 中，并将/etc/shadow的shadow密码栏删掉。这是为了方便下一步的密码转换工作，即先取消 shadow password 功能。   # pwunconv   （4）编辑每个用户的密码对照文件。   范例文件 passwd.txt 内容如下：   user001:密码 user002:密码 user003:密码 user004:密码 user005:密码 user006:密码   （5）以root身份执行命令 /usr/sbin/chpasswd。   创建用户密码，chpasswd 会将经过 /usr/bin/passwd 命令编码过的密码写入 /etc/passwd 的密码栏。   # chpasswd &lt; passwd.txt   （6）确定密码经编码写入/etc/passwd的密码栏后。   执行命令 /usr/sbin/pwconv 将密码编码为 shadow password，并将结果写入 /etc/shadow。   # pwconv   这样就完成了大量用户的创建了，之后您可以到/home下检查这些用户宿主目录的权限设置是否都正确，并登录验证用户密码是否正确。  ","categories": ["Linux"],
        "tags": ["Guide"],
        "url": "/linux/user-manage-on-linux/",
        "teaser": null
      },{
        "title": "yum 服务介绍",
        "excerpt":"什么是 yum  Yum（全称 Yellow Dog Updater）是一个在 Fedora 和 RedHat 以及 CentOS 中的 Shell 前端软件包管理器。基于 RPM 包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包。   软件包来源  可供Yum下载的软件包包括 Fedora, Centos 和 RedHat 本身的软件包，其中 Fedora 的软件包是由Linux社区维护的，并且基本是自由软件。所有的包都有一个独立的PGP签名。   常用命令行命令   安装软件(以foo-x.x.x.rpm为例）：  $ yum install foo-x.x.x.rpm   删除软件：  $ yum remove foo-x.x.x.rpm  或者  $ yum erase foo-x.x.x.rpm   升级软件：  $ yum upgrade foo  或者  $ yum update foo   查询信息：  $ yum info foo   搜索软件（以包含foo字段为例）：  $ yum search foo   显示软件包依赖关系：  $ yum deplist foo   清除全部:  $ yum clean all   清除临时包文件（/var/cache/yum 下文件):  $ yum clean packages   清除rpm头文件:  $ yum clean headers   清除旧的rpm头文件:  $ yum clean oldheaders   可安装和可更新的rpm包:  $ yum list   已安装的包:  $ yum list installed   已安装且不在资源库的包:  $ yum list extras   显示已配置的源:  $ yum repolist   可选项:    -q 静默执行        -t 忽略错误       -R [分钟] 命令最长等待时间       -y 自动应答，在执行 yum 操作时回答全部问题为是       --skip-broken 忽略存在依赖关系问题的软件包       --nogpgcheck 禁用 GPG 签名检查  ","categories": ["Linux"],
        "tags": ["Yum","Tool","Guide"],
        "url": "/linux/guide-yum/",
        "teaser": null
      },{
        "title": "CentOS通过yum安装php72",
        "excerpt":"PHP 7.2.14已于2019年1月10日在PHP.net上发布，也可通过Yum在Webtatic上获得CentOS / RHEL 7.5。   要安装，首先必须将与CentOS / RHEL版本对应的Webtatic EL yum存储库信息添加到yum：   CentOS / RHEL 7.x：   $ sudo yum install epel-release $ sudo rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm   现在您可以通过执行以下操作来安装PHP 7.2的mod_php SAPI（以及opcode缓存）：   $ sudo yum install mod_php72w php72w-opcache   您也可以通过以下方式安装PHP 7.2的php-fpm SAPI（以及opcode缓存）：   $ sudo yum install php72w-fpm php72w-opcache   您可能还需要安装PHP命令行工具：   $ sudo yum install php72w-cli    [原文链接]  ","categories": ["Linux"],
        "tags": ["Yum","PHP","Guide"],
        "url": "/linux/php72-on-centos-via-yum/",
        "teaser": null
      },{
        "title": "CentOS通过yum安装MySQL",
        "excerpt":"Yum默认源搜索MySQL，查找到的结果是mariadb，它是MySQL的一个分支。为了保证稳定性，安装版本一般不是很新。 所以第一步我们需要安装MySQL的Yum源。   下载安装MySQL官方的Yum Repository  根据Linux发行版本（CentOS、Fedora都属于红帽系），从MySQL官方获取Yum Repository。   Yum Repository   $ sudo rpm -Uvh https://repo.mysql.com/mysql57-community-release-el7.rpm   安装MySQL数据库的服务器版本  $ sudo yum install mysql-community-server   启动数据库   $ systemctl start  mysqld   查询数据库状态  $ systemctl status mysqld   获取初始密码   使用Yum安装并启动MySQL服务后，MySQL进程会自动在进程日志中打印root用户的初始密码：  $ grep 'temporary password' /var/log/mysqld.log   // Output: // 2019-03-14T02:14:19.084352Z 1 [Note] A temporary password is generated for root@localhost: G8g-0+w/daL1    修改root用户密码   使用获取到的root用户的初始密码，然后进行修改：   // 登录 $ mysql -uroot -p  // 修改密码  // 为了加强安全性, MySQL5.7以后, 默认密码验证策略必须符合长度, 且必须含有数字, 小写或大写字母, 特殊字符 $ mysql&gt; ALTER USER 'root'@'localhost' IDENTIFIED BY 'new password';  // 退出 $ mysql&gt; exit   安装完毕   至此，使用Yum方法在CentOS7中安装MySQL5.7数据库完毕。可以使用新的root密码登陆MySQL了。  ","categories": ["Linux","Database"],
        "tags": ["Yum","MySQL","Guide"],
        "url": "/linux/database/mysql-on-centos-via-yum/",
        "teaser": null
      },{
        "title": "比较字符串最小字母出现频次",
        "excerpt":"1170. 比较字符串最小字母出现频次 (Medium)   定义一个函数 f(s)，统计 s  中（按字典序比较）最小字母的出现频次 ，其中 s 是一个非空字符串。   例如，若 s = \"dcce\"，那么 f(s) = 2，因为字典序最小字母是 \"c\"，它出现了 2 次。   现在，给你两个字符串数组待查表 queries 和词汇表 words 。对于每次查询 queries[i] ，需统计 words 中满足 f(queries[i]) &lt; f(W) 的 词的数目 ，W 表示词汇表 words 中的每个词。   请你返回一个整数数组 answer 作为答案，其中每个 answer[i] 是第 i 次查询的结果。       示例 1：    输入：queries = [\"cbd\"], words = [\"zaaaz\"] 输出：[1] 解释：查询 f(\"cbd\") = 1，而 f(\"zaaaz\") = 3 所以 f(\"cbd\") &lt; f(\"zaaaz\")。   示例 2：    输入：queries = [\"bbb\",\"cc\"], words = [\"a\",\"aa\",\"aaa\",\"aaaa\"] 输出：[1,2] 解释：第一个查询 f(\"bbb\") &lt; f(\"aaaa\")，第二个查询 f(\"aaa\") 和 f(\"aaaa\") 都 &gt; f(\"cc\")。       提示：    \t1 &lt;= queries.length &lt;= 2000 \t1 &lt;= words.length &lt;= 2000 \t1 &lt;= queries[i].length, words[i].length &lt;= 10 \tqueries[i][j]、words[i][j] 都由小写英文字母组成   相关话题  [数组]   [哈希表]   [字符串]   [二分查找]   [排序]     解法  ","categories": ["Leetcode"],
        "tags": ["Array","Hash Table","String","Binary Search","Sorting"],
        "url": "/problems/compare-strings-by-frequency-of-the-smallest-character/",
        "teaser": null
      },{
        "title": "一周中的第几天",
        "excerpt":"1185. 一周中的第几天 (Easy)   给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。   输入为三个整数：day、month 和&nbsp;year，分别表示日、月、年。   您返回的结果必须是这几个值中的一个&nbsp;{&quot;Sunday&quot;, &quot;Monday&quot;, &quot;Tuesday&quot;, &quot;Wednesday&quot;, &quot;Thursday&quot;, &quot;Friday&quot;, &quot;Saturday&quot;}。   &nbsp;   示例 1：   输入：day = 31, month = 8, year = 2019 输出：&quot;Saturday&quot;   示例 2：   输入：day = 18, month = 7, year = 1999 输出：&quot;Sunday&quot;   示例 3：   输入：day = 15, month = 8, year = 1993 输出：&quot;Sunday&quot;   &nbsp;   提示：    \t给出的日期一定是在&nbsp;1971 到&nbsp;2100&nbsp;年之间的有效日期。   相关话题  [数学]     解法  ","categories": ["Leetcode"],
        "tags": ["Math"],
        "url": "/problems/day-of-the-week/",
        "teaser": null
      },{
        "title": "“气球” 的最大数量",
        "excerpt":"1189. “气球” 的最大数量 (Easy)   给你一个字符串&nbsp;text，你需要使用 text 中的字母来拼凑尽可能多的单词&nbsp;&quot;balloon&quot;（气球）。   字符串&nbsp;text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词&nbsp;&quot;balloon&quot;。   &nbsp;   示例 1：      输入：text = &quot;nlaebolko&quot; 输出：1   示例 2：      输入：text = &quot;loonbalxballpoon&quot; 输出：2   示例 3：   输入：text = &quot;leetcode&quot; 输出：0   &nbsp;   提示：    \t1 &lt;= text.length &lt;= 10^4 \ttext&nbsp;全部由小写英文字母组成   相关话题  [哈希表]   [字符串]   [计数]     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","String","Counting"],
        "url": "/problems/maximum-number-of-balloons/",
        "teaser": null
      },{
        "title": "分割平衡字符串",
        "excerpt":"1221. 分割平衡字符串 (Easy)   在一个 平衡字符串 中，'L' 和 'R' 字符的数量是相同的。   给你一个平衡字符串&nbsp;s，请你将它分割成尽可能多的平衡字符串。   注意：分割得到的每个字符串都必须是平衡字符串，且分割得到的平衡字符串是原平衡字符串的连续子串。   返回可以通过分割得到的平衡字符串的 最大数量 。   &nbsp;   示例 1：    输入：s = \"RLRRLLRLRL\" 输出：4 解释：s 可以分割为 \"RL\"、\"RRLL\"、\"RL\"、\"RL\" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。   示例 2：    输入：s = \"RLLLLRRRLR\" 输出：3 解释：s 可以分割为 \"RL\"、\"LLLRRR\"、\"LR\" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。   示例 3：    输入：s = \"LLLLRRRR\" 输出：1 解释：s 只能保持原样 \"LLLLRRRR\".   示例 4：    输入：s = \"RLRRRLLRLL\" 输出：2 解释：s 可以分割为 \"RL\"、\"RRRLLRLL\" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。   &nbsp;   提示：    \t1 &lt;= s.length &lt;= 1000 \ts[i] = 'L' 或 'R' \ts 是一个 平衡 字符串   相关话题  [贪心]   [字符串]   [计数]     解法  ","categories": ["Leetcode"],
        "tags": ["Greedy","String","Counting"],
        "url": "/problems/split-a-string-in-balanced-strings/",
        "teaser": null
      },{
        "title": "systemd 服务",
        "excerpt":"systemd 是一个 Linux 系统基础组件的集合，提供了一个系统和服务管理器，运行为 PID 1 并负责启动其它程序。 功能包括：支持并行化任务；同时采用 socket 式与 D-Bus 总线式激活服务；按需启动守护进程（daemon）； 利用 Linux 的 cgroups 监视进程；支持快照和系统恢复；维护挂载点和自动挂载点；各服务间基于依赖关系进行精密控制。 systemd 支持 SysV 和 LSB 初始脚本，可以替代 sysvinit。 除此之外，功能还包括日志进程、控制基础系统配置，维护登陆用户列表以及系统账户、运行时目录和设置，可以运行容器和虚拟机， 可以简单的管理网络配置、网络时间同步、日志转发和名称解析等。   systemd 简介  首先 systemd 是一个用户空间的程序，属于应用程序，不属于 Linux 内核范畴。 systemd 是 Linux 系统中最新的初始化系统（init），它主要的设计目标是克服 sysvinit 固有的缺点，提高系统的启动速度。   Linux内核加载启动后，用户空间的第一个进程就是初始化进程，这个程序的物理文件约定位于/sbin/init， 当然也可以通过传递内核参数来让内核启动指定的程序。这个进程的特点是进程号为1，代表第一个运行的用户空间进程。 不同发行版采用了不同的启动程序，主要有以下几种主流选择：      以 Ubuntu 为代表的 Linux 发行版采用 upstart   CentOS7.0 版本之前的 System V init   CentOS7.0 版本的 systemd   systemd 架构图:    systemd 基本使用   查看当前安装的版本  $ systemctl --version  systemd 219 +PAM +AUDIT +SELINUX +IMA -APPARMOR +SMACK +SYSVINIT +UTMP +LIBCRYPTSETUP +GCRYPT +GNUTLS +ACL +XZ +LZ4 -SECCOMP +BLKID +ELFUTILS +KMOD +IDN   分析系统状态  $ systemctl status   输出激活的单元  $ systemctl  或 $ systemctl list-units   输出运行失败的单元  $ systemctl --failed   所有可用的单元文件存放在 /usr/lib/systemd/system/ 和 /etc/systemd/system/ 目录（后者优先级更高）。查看所有已安装服务：  $ systemctl list-unit-files   系统管理  systemd 并不是一个命令，而是一组命令，涉及到系统管理的方方面面。   # 重启系统 $ sudo systemctl reboot  # 关闭系统，切断电源 $ sudo systemctl poweroff  # CPU停止工作 $ sudo systemctl halt  # 暂停系统 $ sudo systemctl suspend  # 让系统进入冬眠状态 $ sudo systemctl hibernate  # 让系统进入交互式休眠状态 $ sudo systemctl hybrid-sleep  # 启动进入救援状态（单用户状态） $ sudo systemctl rescue   systemd-analyze 命令用于查看启动耗时  # 查看启动耗时 $ systemd-analyze                                                                                         # 查看每个服务的启动耗时 $ systemd-analyze blame  # 显示瀑布状的启动过程流 $ systemd-analyze critical-chain  # 显示指定服务的启动流 $ systemd-analyze critical-chain atd.service   hostnamectl 命令用于查看当前主机的信息  # 显示当前主机的信息 $ hostnamectl  # 设置主机名。 $ sudo hostnamectl set-hostname awesee   localectl 命令用于查看本地化设置  # 查看本地化设置 $ localectl  # 设置本地化参数。 $ sudo localectl set-locale LANG=zh_CN.utf8 $ sudo localectl set-keymap zh_CN   timedatectl 命令用于查看当前时区设置  # 查看当前时区设置 $ timedatectl  # 显示所有可用的时区 $ timedatectl list-timezones                                                                                     # 设置当前时区 $ sudo timedatectl set-timezone Asia/Shanghai $ sudo timedatectl set-time YYYY-MM-DD $ sudo timedatectl set-time HH:MM:SS   loginctl 命令用于查看当前登录的用户  # 列出当前session $ loginctl list-sessions  # 列出当前登录用户 $ loginctl list-users  # 列出显示指定用户的信息 $ loginctl show-user shuo   systemd unit  对于开发者来说，工作量最大的部分应该是编写配置单元文件，定义所需要的单元。   systemd unit 类型                  Unit Type       File Extension       Description                       Service unit       .service       服务类                 Target unit       .target       一个 unit 服务组，用于模拟实现运行级别                 Automount unit       .automount       文件系统自动挂载点                 Device unit       .device       内核识别的设备文件                 Mount unit       .mount       文件系统挂载点                 Path unit       .path       文件或目录                 Scope unit       .scope       外部创建的进程                 Slice unit       .slice       A group of hierarchically organized units that manage system processes.                 Snapshot unit       .snapshot       系统快照                 Socket unit       .socket       套接字                 Swap unit       .swap       标识 swap 设备                 Timer unit       .timer       systemd 的计时器           unit 文件保存位置                  Directory       Description                       /usr/lib/systemd/system/       RPM 包安装时分发的 unit 文件                 /run/systemd/system/       systemd 运行时创建的文件                 /etc/systemd/system/       systemctl enable 创建的 unit 文件           管理系统服务  systemd 的主要命令行工具是  systemctl 。   多数管理员应该都已经非常熟悉系统服务和 init 系统的管理，比如 service、chkconfig 以及 telinit 命令的使用。 systemd 也完成同样的管理任务，只是命令工具 systemctl 的语法有所不同而已。   systemd 命令和 sysvinit 命令对比:                  service       systemctl       Description                       service name start       systemctl start name.service       启动服务                 service name stop       systemctl stop name.service       停止服务                 service name restart       systemctl restart name.service       重启服务（没启动的服务会启动）                 service namecondrestart       systemctl try-restart name.service       只重启正在运行的服务                 service name reload       systemctl reload name.service       重载配置文件                 service name status       systemctl status name.service       检查服务状态                 service name status       systemctl is-active name.service       检查服务是否启动                 service –status-all       systemctl list-units –type service –all       显示所有的服务状态           chkconfig 和 systemctl 命令对比:                  chkconfig       systemctl       Description                       chkconfig name on       systemctl enable name.service       启用开机自启服务                 chkconfig name off       systemctl disable name.service       停用自启服务                 chkconfig –list name       systemctl status name.service       检查服务状态                 chkconfig –list name       systemctl is-enabled name.service       查看服务是否自启                 chkconfig –list       systemctl list-unit-files –type service       查看所有服务                 chkconfig –list       systemctl list-dependencies –after       列出在指定服务之前启动的服务（依赖）                 chkconfig –list       systemctl list-dependencies –before       列出在指定服务之后启动的服务（被依赖）            参考资料           systemd - ArchWiki            systemctl 命令完全指南      ","categories": ["Linux"],
        "tags": ["Tool"],
        "url": "/linux/manage-services-using-systemctl-in-linux/",
        "teaser": null
      },{
        "title": "Go系统命令管道操作",
        "excerpt":"go 执行系统命令时不能直接使用管道符 |   实现方法如下：   方法一（同步）   func sync() { \tcmd1 := exec.Command(\"ls\", \".\") \tcmd2 := exec.Command(\"grep\", \"go\") \tcmd2.Stdout = os.Stdout \tin, _ := cmd2.StdinPipe() \tcmd1.Stdout = in \tcmd2.Start() \tcmd1.Run() \tin.Close() \tcmd2.Wait() }   方法二（异步）   func async() { \tcmd1 := exec.Command(\"ls\", \".\") \tcmd2 := exec.Command(\"grep\", \"go\") \tcmd2.Stdout = os.Stdout \tout, _ := cmd1.StdoutPipe() \tin, _ := cmd2.StdinPipe() \tgo func() { \t\tdefer func() { \t\t\tout.Close() \t\t\tin.Close() \t\t}() \t\tio.Copy(in, out) \t}() \tcmd1.Run() \tcmd2.Run() }   方法三（串联）   func main() { \tcmd1 := exec.Command(\"ls\", \".\") \tcmd2 := exec.Command(\"grep\", \"go\") \tcmd3 := exec.Command(\"grep\", \"main\") \tcmd3.Stdout = os.Stdout \tpipe(cmd1, cmd2, cmd3) \tcmd1.Run() \tcmd2.Run() \tcmd3.Run() }  func pipe(cmds ...*exec.Cmd) { \tfor i, cmd := range cmds[1:] { \t\tout, _ := cmds[i].StdoutPipe() \t\tin, _ := cmd.StdinPipe() \t\tgo func() { \t\t\tdefer func() { \t\t\t\tout.Close() \t\t\t\tin.Close() \t\t\t}() \t\t\tio.Copy(in, out) \t\t}() \t} }  ","categories": ["Go"],
        "tags": ["Go","Guide"],
        "url": "/go-cmd-pipe/",
        "teaser": null
      },{
        "title": "数组中的字符串匹配",
        "excerpt":"1408. 数组中的字符串匹配 (Easy)   给你一个字符串数组 words ，数组中的每个字符串都可以看作是一个单词。请你按 任意 顺序返回 words 中是其他单词的子字符串的所有单词。   如果你可以删除 words[j]&nbsp;最左侧和/或最右侧的若干字符得到 word[i] ，那么字符串 words[i] 就是 words[j] 的一个子字符串。   &nbsp;   示例 1：   输入：words = [&quot;mass&quot;,&quot;as&quot;,&quot;hero&quot;,&quot;superhero&quot;] 输出：[&quot;as&quot;,&quot;hero&quot;] 解释：&quot;as&quot; 是 &quot;mass&quot; 的子字符串，&quot;hero&quot; 是 &quot;superhero&quot; 的子字符串。 [&quot;hero&quot;,&quot;as&quot;] 也是有效的答案。   示例 2：   输入：words = [&quot;leetcode&quot;,&quot;et&quot;,&quot;code&quot;] 输出：[&quot;et&quot;,&quot;code&quot;] 解释：&quot;et&quot; 和 &quot;code&quot; 都是 &quot;leetcode&quot; 的子字符串。   示例 3：   输入：words = [&quot;blue&quot;,&quot;green&quot;,&quot;bu&quot;] 输出：[]   &nbsp;   提示：    \t1 &lt;= words.length &lt;= 100 \t1 &lt;= words[i].length &lt;= 30 \twords[i] 仅包含小写英文字母。 \t题目数据 保证 每个 words[i] 都是独一无二的。   相关话题  [字符串]   [字符串匹配]     解法  ","categories": ["Leetcode"],
        "tags": ["String","String Matching"],
        "url": "/problems/string-matching-in-an-array/",
        "teaser": null
      },{
        "title": "重新格式化字符串",
        "excerpt":"1417. 重新格式化字符串 (Easy)   给你一个混合了数字和字母的字符串 s，其中的字母均为小写英文字母。   请你将该字符串重新格式化，使得任意两个相邻字符的类型都不同。也就是说，字母后面应该跟着数字，而数字后面应该跟着字母。   请你返回 重新格式化后 的字符串；如果无法按要求重新格式化，则返回一个 空字符串 。   &nbsp;   示例 1：   输入：s = &quot;a0b1c2&quot; 输出：&quot;0a1b2c&quot; 解释：&quot;0a1b2c&quot; 中任意两个相邻字符的类型都不同。 &quot;a0b1c2&quot;, &quot;0a1b2c&quot;, &quot;0c2a1b&quot; 也是满足题目要求的答案。   示例 2：   输入：s = &quot;leetcode&quot; 输出：&quot;&quot; 解释：&quot;leetcode&quot; 中只有字母，所以无法满足重新格式化的条件。   示例 3：   输入：s = &quot;1229857369&quot; 输出：&quot;&quot; 解释：&quot;1229857369&quot; 中只有数字，所以无法满足重新格式化的条件。   示例 4：   输入：s = &quot;covid2019&quot; 输出：&quot;c2o0v1i9d&quot;   示例 5：   输入：s = &quot;ab123&quot; 输出：&quot;1a2b3&quot;   &nbsp;   提示：    \t1 &lt;= s.length &lt;= 500 \ts 仅由小写英文字母和/或数字组成。   相关话题  [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/reformat-the-string/",
        "teaser": null
      },{
        "title": "分割字符串的最大得分",
        "excerpt":"1422. 分割字符串的最大得分 (Easy)   给你一个由若干 0 和 1 组成的字符串 s ，请你计算并返回将该字符串分割成两个 非空 子字符串（即&nbsp;左 子字符串和 右 子字符串）所能获得的最大得分。   「分割字符串的得分」为 左 子字符串中 0 的数量加上 右 子字符串中 1 的数量。   &nbsp;   示例 1：   输入：s = &quot;011101&quot; 输出：5  解释： 将字符串 s 划分为两个非空子字符串的可行方案有： 左子字符串 = &quot;0&quot; 且 右子字符串 = &quot;11101&quot;，得分 = 1 + 4 = 5  左子字符串 = &quot;01&quot; 且 右子字符串 = &quot;1101&quot;，得分 = 1 + 3 = 4  左子字符串 = &quot;011&quot; 且 右子字符串 = &quot;101&quot;，得分 = 1 + 2 = 3  左子字符串 = &quot;0111&quot; 且 右子字符串 = &quot;01&quot;，得分 = 1 + 1 = 2  左子字符串 = &quot;01110&quot; 且 右子字符串 = &quot;1&quot;，得分 = 2 + 1 = 3   示例 2：   输入：s = &quot;00111&quot; 输出：5 解释：当 左子字符串 = &quot;00&quot; 且 右子字符串 = &quot;111&quot; 时，我们得到最大得分 = 2 + 3 = 5   示例 3：   输入：s = &quot;1111&quot; 输出：3   &nbsp;   提示：    \t2 &lt;= s.length &lt;= 500 \t字符串 s 仅由字符 &#39;0&#39; 和 &#39;1&#39; 组成。   相关话题  [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["String"],
        "url": "/problems/maximum-score-after-splitting-a-string/",
        "teaser": null
      },{
        "title": "Ticker or Sleep",
        "excerpt":"Go编程中，经常会遇到周期性处理任务的需求，下面以每秒打印一次当前时间为例介绍实现方式及区别   方法一（Ticker）   func PrintNow() { \tt := time.NewTicker(time.Second) \tfor range t.C { \t\tfmt.Println(time.Now()) \t} }   方法二（Sleep）   func PrintNow() { \tfor { \t\ttime.Sleep(time.Second) \t\tfmt.Println(time.Now()) \t} }   以上2种方法都可以实现每秒打印一次当前时间，但是2种方式有很大区别。   cpu：方法一cpu占用大于方法二，因为方法一会有一个单独的协程用于定时向chan写入当前时间。   执行时间：方法一小于方法二，实际上方法二并不是每秒打印一次当前时间， 间隔时间其实还包含打印当前时间的执行时间。如果把fmt.Println(time.Now())改为  func() { \ttime.Sleep(500 * time.Millisecond) \tfmt.Println(time.Now()) }()  结果就很明显，方法一是每秒打印一次当前时间，方法二是每1.5秒打印一次当前时间   方法一是两个协程并发执行，方法二是一个协程串行执行  ","categories": ["Go"],
        "tags": ["Go","Guide"],
        "url": "/ticker-or-sleep/",
        "teaser": null
      },{
        "title": "旅行终点站",
        "excerpt":"1436. 旅行终点站 (Easy)   给你一份旅游线路图，该线路图中的旅行线路用数组 paths 表示，其中 paths[i] = [cityAi, cityBi] 表示该线路将会从 cityAi 直接前往 cityBi 。请你找出这次旅行的终点站，即没有任何可以通往其他城市的线路的城市。   题目数据保证线路图会形成一条不存在循环的线路，因此只会有一个旅行终点站。   &nbsp;   示例 1：   输入：paths = [[&quot;London&quot;,&quot;New York&quot;],[&quot;New York&quot;,&quot;Lima&quot;],[&quot;Lima&quot;,&quot;Sao Paulo&quot;]] 输出：&quot;Sao Paulo&quot;  解释：从 &quot;London&quot; 出发，最后抵达终点站 &quot;Sao Paulo&quot; 。本次旅行的路线是 &quot;London&quot; -&gt; &quot;New York&quot; -&gt; &quot;Lima&quot; -&gt; &quot;Sao Paulo&quot; 。   示例 2：   输入：paths = [[&quot;B&quot;,&quot;C&quot;],[&quot;D&quot;,&quot;B&quot;],[&quot;C&quot;,&quot;A&quot;]] 输出：&quot;A&quot; 解释：所有可能的线路是： &quot;D&quot; -&gt; &quot;B&quot; -&gt; &quot;C&quot; -&gt; &quot;A&quot;.&nbsp; &quot;B&quot; -&gt; &quot;C&quot; -&gt; &quot;A&quot;.&nbsp; &quot;C&quot; -&gt; &quot;A&quot;.&nbsp; &quot;A&quot;.&nbsp; 显然，旅行终点站是 &quot;A&quot; 。   示例 3：   输入：paths = [[&quot;A&quot;,&quot;Z&quot;]] 输出：&quot;Z&quot;   &nbsp;   提示：    \t1 &lt;= paths.length &lt;= 100 \tpaths[i].length == 2 \t1 &lt;=&nbsp;cityAi.length,&nbsp;cityBi.length &lt;= 10 \tcityAi&nbsp;!=&nbsp;cityBi \t所有字符串均由大小写英文字母和空格字符组成。   相关话题  [哈希表]   [字符串]     解法  ","categories": ["Leetcode"],
        "tags": ["Hash Table","String"],
        "url": "/problems/destination-city/",
        "teaser": null
      },{
        "title": "检查单词是否为句中其他单词的前缀",
        "excerpt":"1455. 检查单词是否为句中其他单词的前缀 (Easy)   给你一个字符串 sentence 作为句子并指定检索词为 searchWord ，其中句子由若干用 单个空格 分隔的单词组成。   请你检查检索词 searchWord 是否为句子 sentence 中任意单词的前缀。    \t如果 searchWord 是某一个单词的前缀，则返回句子 sentence 中该单词所对应的下标（下标从 1 开始）。 \t如果 searchWord 是多个单词的前缀，则返回匹配的第一个单词的下标（最小下标）。 \t如果 searchWord 不是任何单词的前缀，则返回 -1 。   字符串 S 的 前缀 是 S 的任何前导连续子字符串。       示例 1：    输入：sentence = \"i love eating burger\", searchWord = \"burg\" 输出：4 解释：\"burg\" 是 \"burger\" 的前缀，而 \"burger\" 是句子中第 4 个单词。  示例 2：    输入：sentence = \"this problem is an easy problem\", searchWord = \"pro\" 输出：2 解释：\"pro\" 是 \"problem\" 的前缀，而 \"problem\" 是句子中第 2 个也是第 6 个单词，但是应该返回最小下标 2 。   示例 3：    输入：sentence = \"i am tired\", searchWord = \"you\" 输出：-1 解释：\"you\" 不是句子中任何单词的前缀。   示例 4：    输入：sentence = \"i use triple pillow\", searchWord = \"pill\" 输出：4   示例 5：    输入：sentence = \"hello from the other side\", searchWord = \"they\" 输出：-1       提示：    \t1 &lt;= sentence.length &lt;= 100 \t1 &lt;= searchWord.length &lt;= 10 \tsentence 由小写英文字母和空格组成。 \tsearchWord 由小写英文字母组成。 \t前缀就是紧密附着于词根的语素，中间不能插入其它成分，并且它的位置是固定的——-位于词根之前。（引用自 前缀_百度百科 ）   相关话题  [字符串]   [字符串匹配]     解法  ","categories": ["Leetcode"],
        "tags": ["String","String Matching"],
        "url": "/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/",
        "teaser": null
      },{
        "title": "常见问题解答",
        "excerpt":"搜索包含指定内容的文件  # 方法一 $ grep \"指定内容\" -rl /path/to/dir # 方法二 $ find /path/to/dir -type f [-maxdepth n] [-mindepth n] -print0 |xargs -0 grep \"指定内容\"     创建指定大小，不占磁盘空间的文件  $ dd if=/dev/null of=/path/to/file [bs=1024] count=0 seek=20000000   镜像网站  $ wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://www.example.com   获取图片详细信息  $ identify -verbose example.jpg   M3U8 Download  $ ffmpeg -i https://example.com/index.m3u8 -c copy out.mp4   Mac 允许任何来源  $ sudo spctl --master-disable   计算机常见术语及缩写   Abbreviations   What does el5, el6, and el7 mean?   EL is short for Red Hat Enterprise Linux (EL).      EL5 is the download for Red Hat 5.x, CentOS 5.x, CloudLinux 5.x.   EL6 is the download for Red Hat 6.x, CentOS 6.x, and CloudLinux 6.x.   EL7 is the download for Red Hat 7.x, CentOS 7.x, and CloudLinux 7.x.   The .netrc file   netrc, .netrc - user configuration for ftp  ","categories": ["Guide"],
        "tags": ["Guide"],
        "url": "/guide/frequently-asked-questions/",
        "teaser": null
      }]
