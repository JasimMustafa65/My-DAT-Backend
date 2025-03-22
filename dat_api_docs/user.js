/**
 * @openapi
 * /registration:
 *   post:
 *     tags:
 *       - User
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               organizationName:
 *                 type: string
 *               industry:
 *                 type: string
 *               phone:
 *                 type: string
 *               organizationSize:
 *                 type: string
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: User already exists
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /login:
 *   post:
 *     tags:
 *       - User
 *     summary: User login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: User does not exist or incorrect password
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /user-plan-subscription:
 *   post:
 *     tags:
 *       - User
 *     summary: Subscribe to a plan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: number
 *               planId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Plan subscribed successfully
 *       400:
 *         description: Already subscribed to this plan
 *       500:
 *         description: Internal server error
 */

