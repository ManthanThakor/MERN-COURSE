//! ===================

async function random() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Success");
    } else {
      reject("Failure");
    }
  });
}

async function main() {
  try {
    const result = await random();
    console.log(result);
  } catch (error) {
    console.error("An error occurred: ", error);
  }
}

main();
