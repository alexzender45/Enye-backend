import { Router } from 'express';
import { Controller } from '../controllers';
//

const router = Router();
const { 
  fetchSeveralTest
   
 } = new Controller();

router
  .route('/')
  .get(fetchSeveralTest)

 export default router;