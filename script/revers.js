  const reverse = (str) => {
      if (str === '') return str;
      const reversefunct = (res,subs) => (subs==='') ?res:reversefunct (res + subs [ subs.length - 1 ], subs.substr (0, subs.length - 1));
      return reversefunct ('',str);
  };

  console.log (reverse ('1234567890'));
