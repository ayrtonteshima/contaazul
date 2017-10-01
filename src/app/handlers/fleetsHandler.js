const fleetsStore = require('./../stores/fleetsStore');

const handleGETFleets = (req, res) => (
  fleetsStore.getAll()
    .then(data => res.json({
      statusCode: 200,
      message: 'Dados retornado com sucesso!',
      data,
    }))
    .catch(() => res.status(500).send())
);

const handlePOSTFleets = (req, res) => (
  fleetsStore.save(req.body)
    .then(data => res.json({
      statusCode: 200,
      message: 'Salvo com sucesso!',
      data,
    }))
    .catch(() => res.status(500).send())
);

const handleDELETEFleets = (req, res) => {
  const { id } = req.params;
  fleetsStore.del(id)
    .then(() => res.status(204).send())
    .catch(() => res.status(500).send())
};

module.exports = {
  handleGETFleets,
  handlePOSTFleets,
  handleDELETEFleets,
};

