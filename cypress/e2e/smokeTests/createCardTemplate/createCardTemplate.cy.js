/// <reference types ="cypress" />
import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/dataUtils.cy";
import createCardTemplateActions from "../../../pageObjects/createCardTemplate/Actions.cy";
import createCardTemplateAssertions from "../../../pageObjects/createCardTemplate/Assertions.cy";   
const dataUtil = new dataUtils()
const createCardTemplateAction = new createCardTemplateActions()
const createCardTemplateAssertion = new createCardTemplateAssertions()
const boardName = "cy-Board-Template"
const cardName = "cy-card-template"
let boardId , boardUrl , listId , cardId, cardUrl   

before(()=>{
    dataUtil.createBoard(boardName).then((boardResponse)=>{
        boardId = boardResponse.body.id
        boardUrl = boardResponse.body.url

        dataUtil.createBoradList(boardId,"To Do").then((listResponse)=>{
            listId = listResponse.body.id
            dataUtil.createCard(listId,cardName).then((cardResponse)=>{
                cardUrl = cardResponse.body.url
            })  

        })
    })
    cy.loginToTrello()
})

Given("The user opens an existing card on the board",()=>{
    createCardTemplateAction.openCard(cardUrl)
})

When("The user clicks on the actions button on the card",()=>{
    createCardTemplateAction.clickOnActionsButton()
})

When("The user selects the Make Template option from the dropdown",()=>{    
    createCardTemplateAction.selectMakeTemplateOption() 
})

Then('A confirmation message {string} should be displayed',(message)=>{
    createCardTemplateAssertion.checkTemplateConfirmationMessage(message)
})

after(()=>{
    dataUtil.deleteBoard(boardId)
})