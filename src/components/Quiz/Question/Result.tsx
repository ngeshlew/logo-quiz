import React from 'react'
import styled from 'styled-components'

const correctMessages = ['Nailed it', 'Yup', 'Got it!', 'You rocked that one', 'Nice job', "I'm super impressed"]
const incorrectMessages = ['Uh... no', 'Sorry, wrong', 'Wrong wrong wrong', 'Nice try (but not that nice)', "Manzeee... ☹️"]

const getRandom = (messages: string[]) => {
    const index = Math.floor(Math.random() * messages.length)
    return messages[index]
}

const ResultContainer = styled.div`
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    text-transform: uppercase;

    @media screen and (max-width: 500px), screen and (max-height: 500px) {
        display: none;
    }
`

const Result = ({ correct }: { correct: boolean | undefined }) => {
    const message = React.useMemo(() => {
        if (correct === undefined) {
            return null
        }
        return getRandom(correct ? correctMessages : incorrectMessages)
    }, [correct])
    if (correct === undefined) {
        return <ResultContainer>&nbsp;</ResultContainer>
    }
    return <ResultContainer>{message}</ResultContainer>
}

export default Result