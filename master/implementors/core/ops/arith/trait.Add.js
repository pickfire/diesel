(function() {var implementors = {};
implementors["bigdecimal"] = [{"text":"impl Add&lt;BigDecimal&gt; for BigDecimal","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigDecimal&gt; for BigDecimal","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigDecimal&gt; for &amp;'a BigDecimal","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b BigDecimal&gt; for &amp;'a BigDecimal","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for BigDecimal","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for BigDecimal","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a BigDecimal","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b BigDecimal","synthetic":false,"types":[]}];
implementors["chrono"] = [{"text":"impl Add&lt;Duration&gt; for Duration","synthetic":false,"types":[]},{"text":"impl Add&lt;FixedOffset&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl Add&lt;FixedOffset&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Add&lt;FixedOffset&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for NaiveDate","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Add&lt;Duration&gt; for Date&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Add&lt;Duration&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]}];
implementors["diesel"] = [{"text":"impl&lt;Rhs&gt; Add&lt;Rhs&gt; for now <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Rhs: AsExpression&lt;&lt;&lt;now as Expression&gt;::SqlType as Add&gt;::Rhs&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Rhs&gt; Add&lt;Rhs&gt; for today <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Rhs: AsExpression&lt;&lt;&lt;today as Expression&gt;::SqlType as Add&gt;::Rhs&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;ST, T, __Rhs&gt; Add&lt;__Rhs&gt; for SqlLiteral&lt;ST, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: Expression,<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: Expression,<br>&nbsp;&nbsp;&nbsp;&nbsp;Self::SqlType: Add,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Self::SqlType as Add&gt;::Rhs: SqlType + SingleValue,<br>&nbsp;&nbsp;&nbsp;&nbsp;__Rhs: AsExpression&lt;&lt;Self::SqlType as Add&gt;::Rhs&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Add&lt;PgInterval&gt; for PgInterval","synthetic":false,"types":[]},{"text":"impl Add&lt;PgMoney&gt; for PgMoney","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b BigInt&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u8&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u8&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for u8","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u8&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b u8","synthetic":false,"types":[]},{"text":"impl Add&lt;u8&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u16&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u16&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for u16","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u16&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b u16","synthetic":false,"types":[]},{"text":"impl Add&lt;u16&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a usize&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;usize&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for usize","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b usize&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b usize","synthetic":false,"types":[]},{"text":"impl Add&lt;usize&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a i8&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a i8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;i8&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for i8","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b i8&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b i8","synthetic":false,"types":[]},{"text":"impl Add&lt;i8&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for i8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a i16&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a i16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;i16&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for i16","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b i16&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b i16","synthetic":false,"types":[]},{"text":"impl Add&lt;i16&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for i16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a isize&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a isize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;isize&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for isize","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b isize&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b isize","synthetic":false,"types":[]},{"text":"impl Add&lt;isize&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for isize","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u32&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u32&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for u32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u32&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b u32","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u64&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u64&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for u64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u64&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b u64","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u128&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u128&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for u128","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u128&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b u128","synthetic":false,"types":[]},{"text":"impl Add&lt;u32&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;u64&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;u128&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for i32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a i32&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a i32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;i32&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for i32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b i32&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b i32","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a i64&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;i64&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b i64&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b i64","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for i128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a i128&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a i128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;i128&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for i128","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b i128&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b i128","synthetic":false,"types":[]},{"text":"impl Add&lt;i32&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;i64&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;i128&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigUint&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigUint&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b BigUint&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigUint&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u8&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigUint&gt; for &amp;'a u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u8&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigUint&gt; for u8","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u8&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigUint&gt; for &amp;'b u8","synthetic":false,"types":[]},{"text":"impl Add&lt;u8&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Add&lt;BigUint&gt; for u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u16&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigUint&gt; for &amp;'a u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u16&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigUint&gt; for u16","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u16&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigUint&gt; for &amp;'b u16","synthetic":false,"types":[]},{"text":"impl Add&lt;u16&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Add&lt;BigUint&gt; for u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a usize&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigUint&gt; for &amp;'a usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;usize&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigUint&gt; for usize","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b usize&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigUint&gt; for &amp;'b usize","synthetic":false,"types":[]},{"text":"impl Add&lt;usize&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Add&lt;BigUint&gt; for usize","synthetic":false,"types":[]},{"text":"impl Add&lt;BigUint&gt; for u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u32&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigUint&gt; for &amp;'a u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u32&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigUint&gt; for u32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u32&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigUint&gt; for &amp;'b u32","synthetic":false,"types":[]},{"text":"impl Add&lt;BigUint&gt; for u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u64&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigUint&gt; for &amp;'a u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u64&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigUint&gt; for u64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u64&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigUint&gt; for &amp;'b u64","synthetic":false,"types":[]},{"text":"impl Add&lt;BigUint&gt; for u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u128&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigUint&gt; for &amp;'a u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u128&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigUint&gt; for u128","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u128&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigUint&gt; for &amp;'b u128","synthetic":false,"types":[]},{"text":"impl Add&lt;u32&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Add&lt;u64&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Add&lt;u128&gt; for BigUint","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()