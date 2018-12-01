  const reverse = (str) => {
      if (str === '') return str;
      const reversefunct = (res,subs) => 
      reversefunct (res + subs [ subs.length - 1 ], subs.substr (0, subs.length - 1));

      return reversefunct ('',str);
  };


