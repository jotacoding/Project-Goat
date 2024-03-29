import styled from "styled-components";

export const StyledLoading = styled.div`
  body {
            margin: 2rem;
            background-color: #212123;
        }

        .carregamento {
            --linhaNormal: #2f3545;
            --ponto: #5628ee;
            --duracao: 3s;
            width: 44px;
            height: 44px;
            position: relative;
        }

        .carregamento:before {
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 50%;
            position: absolute;
            display: block;
            background: var(--ponto);
            top: 37px;
            left: 19px;
            transform: translate(-18px, -18px);
            animation: animacaoPontoQuadrado var(--duracao) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }

        .carregamento svg {
            display: block;
            width: 100%;
            height: 100%;
        }

        .carregamento svg rect,
        .carregamento svg polygon,
        .carregamento svg circle {
            fill: none;
            stroke: var(--linhaNormal);
            stroke-width: 10px;
            stroke-linejoin: round;
            stroke-linecap: round;
        }

        .carregamento svg polygon {
            stroke-dasharray: 145 76 145 76;
            stroke-dashoffset: 0;
            animation: animacaoTriangulo var(--duracao) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }

        .carregamento svg rect {
            stroke-dasharray: 192 64 192 64;
            stroke-dashoffset: 0;
            animation: animacaoQuadrado 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }

        .carregamento svg circle {
            stroke-dasharray: 150 50 150 50;
            stroke-dashoffset: 75;
            animation: animacaoCirculo var(--duracao) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }

        .carregamento.triangulo {
            width: 48px;
        }

        .carregamento.triangulo:before {
            left: 21px;
            transform: translate(-10px, -18px);
            animation: animacaoPontoTriangulo var(--duracao) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }

        @keyframes animacaoTriangulo {
            33% {
                stroke-dashoffset: 74;
            }

            66% {
                stroke-dashoffset: 147;
            }

            100% {
                stroke-dashoffset: 221;
            }
        }

        @keyframes animacaoPontoTriangulo {
            33% {
                transform: translate(0, 0);
            }

            66% {
                transform: translate(10px, -18px);
            }

            100% {
                transform: translate(-10px, -18px);
            }
        }

        @keyframes animacaoQuadrado {
            25% {
                stroke-dashoffset: 64;
            }

            50% {
                stroke-dashoffset: 128;
            }

            75% {
                stroke-dashoffset: 192;
            }

            100% {
                stroke-dashoffset: 256;
            }
        }

        @keyframes animacaoPontoQuadrado {
            25% {
                transform: translate(0, 0);
            }

            50% {
                transform: translate(18px, -18px);
            }

            75% {
                transform: translate(0, -36px);
            }

            100% {
                transform: translate(-18px, -18px);
            }
        }

        @keyframes animacaoCirculo {
            25% {
                stroke-dashoffset: 125;
            }

            50% {
                stroke-dashoffset: 175;
            }

            75% {
                stroke-dashoffset: 225;
            }

            100% {
                stroke-dashoffset: 275;
            }
        }

        .carregamento {
            display: inline-block;
            margin: 0 16px;
        }
`;