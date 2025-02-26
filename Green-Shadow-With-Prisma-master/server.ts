import express from 'express';
import cors from 'cors';
import fieldRoutes from "./routes/field-routes";
import cropsRoutes from "./routes/crops-routes";
import staffRoutes from "./routes/staff-routes";
import vehicleRoutes from "./routes/vehicle-routes";
import equipmentRoutes from "./routes/equipment-routes";
import fieldLogsRoutes from "./routes/field-logs-routes";
import cropLogsRoutes from "./routes/crop-logs-routes";
import staffLogsRoutes from "./routes/staff-logs-routes";
import userAuthenticationRoutes, {authenticateToken} from "./routes/user-authentication-routes";

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",  // Allow frontend requests
    methods: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    credentials: true
}));

console.log("SECRET_KEY", process.env.SECRET_KEY);

app.use('/auth', userAuthenticationRoutes);

app.use(authenticateToken);

app.use('/field', fieldRoutes);
app.use('/crops', cropsRoutes);
app.use('/staff', staffRoutes);
app.use('/vehicle', vehicleRoutes);
app.use('/equipment', equipmentRoutes);
app.use('/field-logs', fieldLogsRoutes);
app.use('/crop-logs', cropLogsRoutes);
app.use('/staff-logs', staffLogsRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});