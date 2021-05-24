{
  const obj = {
    name: 'elle',
  }
  console.log(obj.name);
  console.log(obj['name']);
  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // name의 타입은 string

  const text: Name = 'hello';

  type Gender = Animal['gender']; // 'male' | 'female' 이것과 동일

  type keys = keyof Animal; // 'name' | 'age' | 'gender' 이렇게 문자열로감

  const key: keys = 'gender';

  
}