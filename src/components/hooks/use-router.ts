import Router from "libs/nextjs/router";

export const useRouter = () => {
  const push = Router.push;

  return { push };
};
