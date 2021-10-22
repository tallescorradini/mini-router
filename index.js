function MiniRouter() {
  const router = [];

  const resolver = (reqUrl, body) => {
    const routeMatch = router.filter(
      (route) => Object.keys(route)[0] === reqUrl
    )[0];

    if (!routeMatch)
      throw new Error(`Requested url '${reqUrl}' was not found.`);

    return routeMatch[reqUrl](body);
  };

  return Object.freeze({
    post: (route, callback) => router.push({ [route]: callback }),
    export: { post: resolver },
  });
}

export { MiniRouter };
