@tag
Feature: Manter tags globais da aplicação

  Scenario: Recuperar tags cadastradas
    Given o endpoint RESTful para interação com a entidade tag
    When configuro o tipo da requisição requisição para "application/json"
    And realizo uma requisição uma requisição HTTP GET
    Then recebo um código HTTP 200 para a requisição
    And o conteúdo do resposta não está vazio

  Scenario: Cadastrar uma nova tag
    Given o endpoint RESTful para interação com a entidade tag
    And quero adicionar a tag "definition"
    When configuro o tipo da requisição para "application/json"
    And realizo uma requisição HTTP POST
    Then recebo um código HTTP 201 para a requisição
    And o conteúdo da resposta não está vazio

  Scenario: Remove uma tag
    Given o endpoint RESTful para interação com a entidade tag
    And existe um registro de uma tag com identificador "1"
    When realizo uma requisição HTTP DELETE
    Then recebo um código HTTP 200 para a requisição
