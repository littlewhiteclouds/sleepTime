var rsaUtil = (function(){
	return{
		enc:function(ming){
			var rsa_m = "f094ce83c084402145ab813ec6d0dbb9928fae98990b23fc1ef4307ffa83310e8527f099a6f08624b5d6c2c58bd437df13f2b1b81fbc35a4b040bfe8983c6af3feb657afa83c291f3798e1619bc29059b8a417b6a5d8756d2472d0ce716bf01df8d0e6eab894c4ef4ab1b899b6d889cc974d0135a2c5a33b7215c4e37cbd5061";
		    var rsa_e = "10001";
		    setMaxDigits(131); //131 => n的十六进制位数/2+3
		    var key      = new RSAKeyPair(rsa_e, '', rsa_m); //e,m是从Java代码中获取的

		   return encryptedString(key, ming); //不支持汉字
		}
	}
})();