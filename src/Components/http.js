export function httpGet(path, setUseLoading ) {
  return new Promise(async (resolve, reject) => {
    try {
      setUseLoading(true);
      const response = await fetch(path, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Error in Calling Remote API.");
      const resData = await response.json();
      resolve(resData);
    } catch (e) {
      console.error(e.message);
      reject(e);
    } finally {
      setUseLoading(false);
    }
  });
}
