  const resultsCursor = Student.find();
    const results1 = await resultsCursor.toArray();
    console.log(results1);