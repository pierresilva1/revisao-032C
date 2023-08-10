# Somente na primeiramconfiguração do computador
git config --global user.name "Pierre Silva de Sá"
git config --global user.email "pierresa2005@gmail.com"

# Somente no início do projeto
git init

# sempre q uma atualizar o projeto em outro computador
git add .
git commit -m "mensagem para o commit"
git push

# Sempre que for baixar o projeto rm outro computador
git clone sitedoprojeto.git

# Sempre que for atualizar o projeto na máquina com atualizações que foram feitas de outro computador
git pull