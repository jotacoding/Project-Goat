import { api } from "../../utils/api/api";
import { Profile } from "../../utils/types/profile";
import { Buttons, ButtonsDiv, ProfileCardSection } from "./style";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";

interface CardProps extends Profile {
  update: () => void;
}

export function ProfileCard({ id, Title, ImageURL, update }: CardProps) {
  const navigate = useNavigate();

  async function DeleteCard() {
    swal({
      title: "Deletar Produto?",
      text: "Tem certeza que deseja deletar este perfil?",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: {
          text: "Cancelar",
          value: null,
          visible: true,
          closeModal: true,
          className: "",
        },
        confirm: {
          text: "Confirmar",
          value: true,
          visible: true,
          closeModal: true,
        },
      },
    }).then(async (res) => {
      if (res) {
        const isDeleted = await api.deleteProfile(id);
        if (isDeleted) {
          update();
        }
      }
    });
  }

  return (
    
    <ProfileCardSection>
      <img src={ImageURL} alt={ImageURL} />
      <h2>{Title}</h2>
      <ButtonsDiv>
        <Buttons
          color="blue"
          width="50px"
          onClick={() => {
            navigate("/update/" + id);
          }}
        >
          Edit
        </Buttons>
        <Buttons color="red" width="50px" onClick={DeleteCard}>
          Delete
        </Buttons>
      </ButtonsDiv>
    </ProfileCardSection>
  );
}
