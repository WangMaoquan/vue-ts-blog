import { useRoute } from 'vue-router';
import { toPathFunc } from '@/types';
import { useRouter } from 'vue-router';

const useMyRouter = () => {
  const router = useRouter();
  const toPath: toPathFunc = (pathName: string) => {
    router.push(pathName);
  };
  return {
    toPath,
    router
  };
};

const useMyRoute = () => {
  const route = useRoute();

  return {
    route
  };
};

export { useMyRouter, useMyRoute };
