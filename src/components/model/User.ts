import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/sequelize.ts';
import bcrypt from 'bcrypt';

class User extends Model {
    // public id!: number;
    // public username!: string;
    public password!: string;

    public static async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    // public async validatePassword(password: string): Promise<boolean> {
    //     return bcrypt.compare(password, this.password);
    // }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'users',
        hooks: {
            beforeCreate: async (user: User) => {
                user.password = await User.hashPassword(user.password);
            },
        },
    }
);

export default User;
