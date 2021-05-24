{
  // function checkNotNull(arg: number | null): number {
  //   if (arg == null) {
  //     throw new Error('not valid Number');
  //   }
  //   return arg;
  // }

  // function checkNotNull(arg: any | null): any {
  //   if (arg == null) {
  //     throw new Error('not valid Number');
  //   }
  //   return arg;
  // }
  //구랴
  
  function checkNotNull<T>(arg: T | null): T{
    if (arg == null) {
      throw new Error('not valid Number');
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}