"""empty message

Revision ID: 0487ebd413ff
Revises: 9fae6f7c6de1
Create Date: 2020-02-21 11:43:36.466599

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0487ebd413ff'
down_revision = '9fae6f7c6de1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('admin_affiliations')
    op.drop_table('admins')
    op.execute("CREATE SEQUENCE user_affiliations_id_seq")
    op.execute("ALTER TABLE user_affiliations ALTER COLUMN id SET DEFAULT nextval('public.user_affiliations_id_seq')")
    op.execute("ALTER SEQUENCE user_affiliations_id_seq OWNED BY user_affiliations.id")
    op.add_column('user_affiliations', sa.Column('user_id', sa.Integer(), nullable=False))
    op.drop_constraint('user_affiliations_id_fkey', 'user_affiliations', type_='foreignkey')
    op.create_foreign_key('user_user_aff_key', 'user_affiliations', 'users', ['user_id'], ['id'])
    op.drop_column('users', 'user_role')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.execute("ALTER TABLE user_affiliations ALTER COLUMN id DROP DEFAULT")
    op.execute("DROP SEQUENCE user_affiliations_id_seq")
    op.add_column('users', sa.Column('user_role', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.drop_constraint('user_user_aff_key', 'user_affiliations', type_='foreignkey')
    op.create_foreign_key('user_affiliations_id_fkey', 'user_affiliations', 'users', ['id'], ['id'])
    op.drop_column('user_affiliations', 'user_id')
    op.create_table('admins',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('username', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('display_name', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('user_email', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('preferred_lang', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='admins_pkey')
    )
    op.create_table('admin_affiliations',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('sector_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('permission', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['id'], ['admins.id'], name='admin_affiliations_id_fkey'),
    sa.ForeignKeyConstraint(['sector_id'], ['sectors.id'], name='admin_affiliations_sector_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='admin_affiliations_pkey')
    )
    # ### end Alembic commands ###