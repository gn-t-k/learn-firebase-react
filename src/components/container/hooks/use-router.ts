import { useRouter as useNextRouter } from "next/dist/client/router";

export const useRouter = () => {
  const router = useNextRouter();

  const push = router.push;

  return { push };
};
