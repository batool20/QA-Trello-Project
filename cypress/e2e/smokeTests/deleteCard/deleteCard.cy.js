/// <reference types ="cypress" />
import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/dataUtils.cy";
import deleteCardActions from "../../../pageObjects/deleteCard/Actions.cy";
import deleteCardAssertions from "../../../pageObjects/deleteCard/Assertions.cy";

const dataUtil = new dataUtils()
const deleteCardAction = new deleteCardActions()
const deleteCardAssertion = new deleteCardAssertions()

const boardName = "cy-Board-test-deleteCard"
const cardName = "cy-card-test-deleteCard"
let boardId , boardUrl , listId , cardId, cardUrl

before(()=>{
    dataUtil.createBoard(boardName).then((boardResponse)=>{
        boardId = boardResponse.body.id  
        boardUrl = boardResponse.body.url
        dataUtil.createBoradList(boardId,"To Do").then((listResponse)=>{
            listId = listResponse.body.id  

            dataUtil.createCard(listId,cardName).then((cardResponse)=>{
            cardId = cardResponse.body.id
            cardUrl = cardResponse.body.url
            }) 
        })
    })
    cy.loginToTrello()
})

Given("The user opens an existing card on the board",()=>{
    cy.visit(boardUrl)
    cy.screenshot("R0-ScreenShot/BoardPage.png",{capture:"fullPage"})
    deleteCardAction.openCard(cardUrl)
})

When("The user clicks on archive card button",()=>{
    deleteCardAction.clickOnArchiveCardButton()
})

When("The user clicks on delete card button and confirm delete",()=>{
    deleteCardAction.clickOnDeleteCardButtonAndConfirmDelete()
})

Then("The card should be deleted successfully",()=>{
    deleteCardAssertion.checkCardIsDeleted(cardName)
})

after(()=>{
    dataUtil.deleteBoard(boardId)
})

