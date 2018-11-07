import userRouter from "../routes/userRoutes";
import profileRouter from '../routes/profileRoutes';
import petRouter from '../routes/petRoutes';
import talentRouter from '../routes/talentRoutes';

let routerBootstrap = function(appInstance) : void{
  appInstance.use("/api/users", userRouter);
  appInstance.use("/api/profiles", profileRouter);
  appInstance.use("/api/pets", petRouter);
  appInstance.use("/api/talents", talentRouter);
}

export default routerBootstrap;