type queryBuilderType = { [key: string]: any };

const queryBuilder = (body: queryBuilderType) => {
  const createQueryString = () => {
    const params = new URLSearchParams(body);

    return params.toString();
  };

  return createQueryString().toString();
};

export default queryBuilder;
